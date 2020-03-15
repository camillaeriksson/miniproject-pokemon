import React from 'react'
import './FavoritePage.css'
import PokemonGeneral from '../PokemonGeneral/PokemonGeneral';

import { Pokemon } from "../App/App";

interface Props {
    favoritePokemons: Pokemon[]
}
interface State {
}

export default class FavoritePage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

    }

    render() {
        console.log(this.props.favoritePokemons)
        {
            return (
                <div className="favorite_container">
                    <h1>My Favorite Pokémons</h1>
                    <div className="favorite_pokemons">
                        {this.props.favoritePokemons.map(pokemon => (
                            <>
                                <img key={pokemon.index} className="pokemon" src={pokemon.imgUrl} alt="A pokemon" />
                                <h1>{pokemon.name}</h1>
                            </>
                        ))}
                    </div>
                </div>
            )
        }
    }
}