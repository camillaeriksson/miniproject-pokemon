import React from "react"
import "./FavoritePage.css"

import { Pokemon } from "../App/App"

interface Props {
    favoritePokemons: Pokemon[]
}

interface State {
}


export default class FavoritePage extends React.Component<Props, State> {

    private capitalizeWord = (str: string) => {
        if (str.length === 0) return ""
        str = str.replace("-", " ")
        return str[0].toUpperCase() + str.slice(1)
    }

    render() {
        return (
            <div className="favorite_container">
                {this.props.favoritePokemons.map(pokemon => (
                    <>  <div className="favorite_card">
                            <img className="title"
                            src="https://fontmeme.com/permalink/200316/2d0aa5c48952e3a7c1278dbf364ef82f.png"
                            alt="Title" />
                            <img className="pokemon" key={pokemon.index} src={pokemon.imgUrl} alt="A pokemon" />
                            <h1>{this.capitalizeWord(pokemon.name)}</h1>
                        </div>
                    </>
                ))}
            </div>
        )
    }
}