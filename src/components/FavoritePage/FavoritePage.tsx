import React from 'react'
import './FavoritePage.css'
import PokemonGeneral from '../PokemonGeneral/PokemonGeneral';


interface Props {
    favoritePokemons: string[]
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
                        {this.props.favoritePokemons.map((pokemon, index) => (
                            <img key={index /* borde vara pokemon.id */} className="pokemon" src={pokemon} alt="A pokemon" />

                        ))}
                    </div>
                </div>
            )
        }
    }
}