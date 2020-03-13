import React from 'react'
import { withRouter, RouteComponentProps } from "react-router-dom"
import './CategoryPage.css'
import Card from '../Card/Card'
import axios from 'axios'
import ErrorBoundary from "../Errorboundry/errorboundry";

interface Props extends RouteComponentProps {}

interface State {
    pokemons:
    {
        name: string,
        url: string,
        imgUrl: string,
    }[]
}

 class CategoryPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            pokemons: [],

        }
    }

    async pokemonApi() {
        const getPokemonCategoryURL = "https://pokeapi.co/api/v2/pokemon-color"
        const res = await axios.get(getPokemonCategoryURL)
        const {color}: any = this.props.location.state
     

        const category = res.data.results.find((catObj: any) => catObj.name === color)
        const res2 = await axios.get(category.url)

        this.setState({ pokemons: res2.data.pokemon_species })
    }

    async componentDidMount() {
        this.pokemonApi()
    }

    componentWillReceiveProps(nextProps: Props){
        this.pokemonApi()
    }
     

    addFavourite() {

    }

    render() {
        return (
            <ErrorBoundary>
                <div className="category_container">
                    {
                        this.state.pokemons ? (
                            <div className="containers">
                                {this.state.pokemons.map(pokemon => (
                                    <Card name={pokemon.name} pokemonId={pokemon.url} addPokemon={this.addFavourite} />
                                ))}
                            </div>
                        ) : (
                                <h1>loading...</h1>
                            )

                    }
                </div>
            </ErrorBoundary>
        )
    }
}


export default withRouter(CategoryPage)