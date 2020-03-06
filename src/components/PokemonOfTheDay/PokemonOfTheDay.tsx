import React from "react"
import "./PokemonOfTheDay.css"
import axios from "axios"

interface Props {

}

interface State {
    name: null | string,
    imgUrl: string,
    pokemonIndex: number
}

class PokemonOfTheDay extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            name: "",
            imgUrl: "",
            pokemonIndex: 0
        }
    }

    async componentDidMount() {
        const pokemonLimit = 963
        const daysSinceCalendarStart = 1 + Math.floor(new Date().getTime() / 1000 / 60 / 60 / 24)
        const pokemonIndexOfToday = daysSinceCalendarStart % pokemonLimit
        const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonIndexOfToday

        const res = await axios.get(url)

        const pokemonName = res.data["species"].name

        const imgUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndexOfToday}.png?raw=true`

        this.setState({
            name: pokemonName,
            imgUrl,
            pokemonIndex: pokemonIndexOfToday
        })
    }

    render() {
        return (
            <div className="pokemon_container">
                <h1 className="heading_mobile">Pokemon of the day</h1>
                <img className="pokemon_pic" src={this.state.imgUrl} alt="Pokemon of the day" />
                <div className="heading_and_text">
                    <h1 className="heading_desktop">Pokemon of the day</h1>
                    <h2>{this.state.name?.toLowerCase().split(' ').map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join('')}</h2>
                    <p className="pokemon_text">Index: {this.state.pokemonIndex}</p>
                </div>
            </div>
        )
    }
}

export default PokemonOfTheDay