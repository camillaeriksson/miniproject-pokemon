import React from 'react'
import './FavouritePage.css'
import { Favourite } from '../Card/Card'
import axios from 'axios'


interface Props {

}
interface State {
    favouritePokemon: string[],
    value: string
    name: string
}


export default class FavouritePage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            favouritePokemon: [],
            value: '',
            name: ''
        };
        this.addFavourite = this.addFavourite.bind(this)

    }

    addFavourite = (data: any) => {
        this.setState({ value: data });
    }
    render() {
        const fav = this.state.favouritePokemon.push(this.state.value)
        {
            return (
                <div className="favourite_container">
                    <h1>My Favourites</h1>
                    <h4>{this.state.favouritePokemon}</h4>

                    <Favourite name={this.state.name} pokemonUrl={this.state.name} addPokemon={this.addFavourite} />
                </div>
            )
        }
    }
}