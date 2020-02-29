import React from "react"
import wigglytuff from "../../assets/Wigglytuff.png"
import "./PokemonOfTheDay.css"


interface Props {

}

interface State {

}

class PokemonOfTheDay extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
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