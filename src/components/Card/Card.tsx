import React from 'react'
import './Card.css'
import { stringify } from 'querystring'

interface Props {
    name: string,
    pokemonURL: string,
}


export default class Card extends React.Component<Props> {

    constructor(props: Props) {
        super(props)

    }

    async componentDidMount() {


    }

    render() {
        return (
            <div className="cardContainer">
                <h1>{this.props.name}</h1>
                <h1>{this.props.pokemonURL}</h1>
            </div>

        )
    }
}