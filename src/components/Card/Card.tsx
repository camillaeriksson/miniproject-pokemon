import React from 'react'
import './Card.css'
import { stringify } from 'querystring'
// import axios from 'axios'

interface Props {
    name: string,
    // pokemonURL: string,
}

interface State {
    imgUrl: string,
}

export default class Card extends React.Component<Props> {

    constructor(props: Props) {
        super(props)
    }


    render() {
        return (
            <div className="cardContainer">
                <h1>{this.props.name}</h1>
                {/* <h1>{this.props.PokemonUrl}</h1> */}
            </div>

        )
    }
}