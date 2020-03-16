import React from "react"
import ErrorBoundary from "../Errorboundry/errorboundry"
import "./StartPageInfo.css"

import squirtle from "../../assets/squirtle.png"
import blue_pokemons from "../../assets/blue_pokemons.png"

interface Props { }

interface State { }

export default class StartPageInfo extends React.Component<Props, State> {

    render() {
        return (
            <ErrorBoundary>
                <div className="info_container">
                    <img className="squirtle_pic" src={squirtle}></img>
                    <p className="blue_text"><b>Start adding</b> Squirtle and his blue friends to your pokeball!</p>
                    <button className="bluePokemonsButton">To the blue pokemons</button>
                    <img className="blue_pokemons" src={blue_pokemons}></img>
                </div>
            </ErrorBoundary>
        )
    }
}