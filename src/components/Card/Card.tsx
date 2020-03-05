import React from 'react'
import './Card.css'
// import axios from 'axios'

interface Props {

}

interface State {
    name: string,
    imgUrl: string,
    pokemonIndex: number,
}

export default class Card extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            name: "",
            imgUrl: "",
            pokemonIndex: 0,
        }
    }

    render() {
        return (
            <div className="cardContainer">
                <div className="cardHeader"><h1></h1></div>
                <div className="cardBody"></div>
            </div>

        )
    }
}