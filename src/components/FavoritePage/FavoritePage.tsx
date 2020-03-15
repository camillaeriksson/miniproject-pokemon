import React from 'react'
import './FavoritePage.css'

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
                <h1>My Favorite Pokémons</h1>
                <div className="favorite_pokemons">
                    {this.props.favoritePokemons.map(pokemon => (
                        <>
                            <img key={pokemon.index} className="pokemon" src={pokemon.imgUrl} alt="A pokemon" />
                            <h1>{this.capitalizeWord(pokemon.name)}</h1>
                        </>
                    ))}
                </div>
            </div>
        )
    }
}