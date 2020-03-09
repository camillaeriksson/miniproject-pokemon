import React from 'react'
import './Card.css'
import { stringify } from 'querystring'

interface Props {
    name: string,
    pokemonId: string,
}

interface State {
    imgUrl: string

}

export default class Card extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
            imgUrl: "",
        }
    }

    async componentDidMount() {
        const pokemonId = this.props.pokemonId.slice(42, this.props.pokemonId.length - 1)
        const imgUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonId}.png?raw=true`

        this.setState({
            imgUrl,
        })
    }

    render() {
        return (
            <div className="cardContainer">
                <h1>{this.props.name}</h1>
                <h1>{this.props.pokemonId.slice(42, this.props.pokemonId.length - 1)}</h1>
                <img src={this.state.imgUrl} />
            </div>

        )
    }
}