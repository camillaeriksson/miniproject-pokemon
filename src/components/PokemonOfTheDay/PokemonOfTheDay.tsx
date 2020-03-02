import React from "react"
import wigglytuff from "../../assets/Wigglytuff.png"
import "./PokemonOfTheDay.css"
import axios from "axios"


interface Props {

}

interface State {
    url: string,
    pokemon: null
}

class PokemonOfTheDay extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            url: "https://pokeapi.co/api/v2/pokemon/",
            pokemon: null
        }
    }

    async componentDidMount() {
        const res = await axios.get(this.state.url)
        const pokemonArray = res.data["results"]
        const randomPokemon = pokemonArray[Math.floor(Math.random() * pokemonArray.length)]
        this.setState({ pokemon: randomPokemon })
        console.log(this.state.pokemon)
    }

    render() {
        return (
            <div className="pokemon_container">
                <h1>Pokemon of the day</h1>
                <img className="pokemon_pic" src={wigglytuff} alt="Picture of Wigglytuff" />
                <h2>Wigglytuff</h2>
                <p className="pokemon_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aut veritatis similique corporis
                    accusamus nihil ullam, cumque ipsam minima quibusdam fugiat vero iure soluta ex. Repellat officiis
                    architecto ab nihil.</p>
            </div>
        )
    }
}

export default PokemonOfTheDay