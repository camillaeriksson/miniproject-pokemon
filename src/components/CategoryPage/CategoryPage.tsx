import React from "react"
import { withRouter, RouteComponentProps } from "react-router-dom"
import "./CategoryPage.css"
import Card from "../Card/Card"
import axios from "axios"
import { ThemeConsumer } from "styled-components"
import ErrorBoundary from "../Errorboundry/errorboundry"

import { Pokemon } from "../App/App"
interface Props extends RouteComponentProps {
    favoritePokemons: Pokemon[]
    addToFavorite: (pokemon: Pokemon) => void
}

interface APIResponseObject {
    name: string,
    url: string,
}

interface PokemonData extends APIResponseObject {
    index: number
}

interface State {
    pokemons: PokemonData[]
}

class CategoryPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            pokemons: []
        }
    }

    async pokemonApi() {
        const getPokemonCategoryURL = "https://pokeapi.co/api/v2/pokemon-color"
        const res = await axios.get(getPokemonCategoryURL)
        const { color }: any = this.props.location.state

        const category = res.data.results.find((catObj: APIResponseObject) => catObj.name === color)
        const res2 = await axios.get(category.url)

        const pokemons: PokemonData[] = res2.data.pokemon_species.map((pokemon: APIResponseObject) => {
            const pokemonIndex = Number(pokemon.url.slice(42, pokemon.url.length - 1))
            return { ...pokemon, index: pokemonIndex }
        })

        this.setState({ pokemons })
    }


    async componentDidMount() {
        this.pokemonApi()
    }

    componentWillReceiveProps(nextProps: Props) {
        this.pokemonApi()
    }

    render() {
        return (
            <ErrorBoundary>
                <div className="category_container">
                    {this.state.pokemons ? (
                        <div className="containers">
                            {this.state.pokemons.map((pokemon, index) => {
                                const isFavourite = this.props.favoritePokemons.find((favPokemon) => pokemon.index === favPokemon.index)
                                return <Card
                                    key={index}
                                    name={pokemon.name}
                                    pokemonIndex={pokemon.index}
                                    isFavourite={Boolean(isFavourite)}
                                    pokemonUrl={pokemon.url}
                                    addPokemon={this.props.addToFavorite}
                                />
                            })}
                        </div>) : (
                            <h1>loading...</h1>
                        )}
                </div>
            </ErrorBoundary>
        )
    }
}

export default withRouter(CategoryPage)