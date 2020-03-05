import React from 'react'
import './CategoryPage.css'
import Card from '../Card/Card'
import axios from 'axios'

interface Props {

}

interface State {
    url: string,
    pokemon: [
        {
            name: string,
            url: string,
        }
    ]
    ;
}

export default class CategoryPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            url: "https://pokeapi.co/api/v2/pokemon-color/",
            pokemon: [{ name: "", url: "", }],

        }
    }
    async componentDidMount() {
        const res = await axios.get(this.state.url)
        this.setState({ pokemon: res.data['results'] })
    }

    render() {
        return (
            <div>
                {
                    this.state.pokemon ? (<div>
                        {this.state.pokemon?.map(pokemon => (
                            <h1>{pokemon.name}</h1>
                        ))}
                    </div>) :
                        (<h1>loading...</h1>
                        )

                }
            </div>
        )
    }
}
