import React from 'react'
import './CategoryPage.css'
import Card from '../Card/Card'
import axios from 'axios'

interface Props {

}

interface State {
    pokemons:
    {
        name: string,
        url: string,
    }[]
}

export default class CategoryPage extends React.Component<Props, State> {
    readonly categoryName = "blue"

    constructor(props: Props) {
        super(props)

        this.state = {
            pokemons: [],

        }
    }
    async componentDidMount() {
        const getPokemonCategoryURL = "https://pokeapi.co/api/v2/pokemon-color"
        const res = await axios.get(getPokemonCategoryURL)

        const category = res.data.results.find((catObj: any) => catObj.name == this.categoryName)
        const res2 = await axios.get(category.url)

        this.setState({ pokemons: res2.data.pokemon_species })
    }

    render() {
        return (
            <div>
                {
                    this.state.pokemons ? (
                        <div>
                            {this.state.pokemons.map(pokemon => (
                                <Card name={pokemon.name} imgUrl={pokemon.url} />
                            ))}
                        </div>
                    ) : (
                            <h1>loading...</h1>
                        )

                }
            </div>
        )
    }
}
