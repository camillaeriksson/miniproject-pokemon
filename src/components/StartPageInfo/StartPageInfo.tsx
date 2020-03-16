import React from "react"
import ErrorBoundary from "../Errorboundry/errorboundry"
import "./StartPageInfo.css"

import squirtle from "../../assets/squirtle.png"
import blue_pokemons from "../../assets/blue_pokemons.png"
import { Link } from "react-router-dom"

interface Props { }

interface State { }

export default class StartPageInfo extends React.Component<Props, State> {

    render() {
        return (
            <ErrorBoundary>
                <div className="info_container">
                    <img className="squirtle_pic" src={squirtle}></img>
                    <p className="blue_text"><b>Start adding</b><br /> Squirtle and his blue friends to your pokeball!</p>
                    <Link to={{
                        pathname: '/category/blue',
                        state: {
                            color: "blue"
                        }
                    }}><button className="bluePokemonsButton">To the blue pokemons</button></Link>
                    <img className="blue_pokemons" src={blue_pokemons}></img>
                </div>
            </ErrorBoundary>
        )
    }
}