import React from 'react'
import './FavouritePage.css'
import Card from '../Card/Card'
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
   
    addFavourite(){
        this.setState({
            value: 'Pokémon'
        })
       
        }
    render() {
        const fav = this.state.favouritePokemon.push(this.state.value)
             {
                return (
                    <div className="favourite_container">
                        <h1>My Favourites</h1>
                        <h2>{this.state.favouritePokemon}</h2>
                        
                        <Card name={this.state.name} pokemonId={this.state.name} handleFavourite={this.addFavourite}/>
                    </div> 
                )
            }
    }
}