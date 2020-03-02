import React from "react"
import "./PokemonOfTheDay.css"
import axios from "axios"

interface Props {

}

interface State {
    url: string,
    name: null | string,
    imgUrl: string,
    pokemonIndex: string
}

class PokemonOfTheDay extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            url: "https://pokeapi.co/api/v2/pokemon?limit=964",
            name: "",
            imgUrl: "",
            pokemonIndex: ""
        }
    }

    async componentDidMount() {
        const res = await axios.get(this.state.url)
        const pokemonArray = res.data["results"]
        const randomPokemon = pokemonArray[Math.floor(Math.random() * pokemonArray.length)]
        this.setState({ url: randomPokemon.url })

        const pokemonIndex = this.state.url.split("/")[this.state.url.split('/').length - 2]

        const imgUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`

        this.setState({
            name: randomPokemon.name,
            imgUrl,
            pokemonIndex
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