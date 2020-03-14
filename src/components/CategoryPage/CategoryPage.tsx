import React from 'react'
import { withRouter, RouteComponentProps } from "react-router-dom"
import './CategoryPage.css'
import Card from '../Card/Card'
import axios from 'axios'
import ErrorBoundary from "../Errorboundry/errorboundry";
import { ThemeConsumer } from 'styled-components';

interface Props extends RouteComponentProps { }

interface State {
    pokemons:
    {
        name: string,
        url: string,
        imgUrl: string,
    }[],
    selectedPokemon: {
        name: string,
        url: string
    }

}

class CategoryPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            pokemons: [],
            selectedPokemon: {
                name: "",
                url: ""
            }
        }
    }

    async pokemonApi() {
        const getPokemonCategoryURL = "https://pokeapi.co/api/v2/pokemon-color"
        const res = await axios.get(getPokemonCategoryURL)
        const { color }: any = this.props.location.state

        const category = res.data.results.find((catObj: any) => catObj.name === color)
        const res2 = await axios.get(category.url)

        this.setState({ pokemons: res2.data.pokemon_species })
    }

    async componentDidMount() {
        this.pokemonApi()
    }

    componentWillReceiveProps(nextProps: Props) {
        this.pokemonApi()
    }


    addFavourite() {

    }

    render() {
        // if (this.state.selectedPokemon) {
        //     return <Card pokemon={this.state.selectedPokemon} />
        // }
        return (
            <ErrorBoundary>
                <div className="category_container">
                    {
                        this.state.pokemons ? (
                            <div className="containers">
                                {this.state.pokemons.map(pokemon => (
                                    // Lista av alla pokemon,. Onclick= sätt state.selectedpokemon till det valda pokemonet
                                    // <div onClick={() => { this.setState({ selectedPokemon: pokemon }) }} >{pokemon.name}</div>
                                    <Card name={pokemon.name} pokemonUrl={pokemon.url} addPokemon={this.addFavourite} />
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