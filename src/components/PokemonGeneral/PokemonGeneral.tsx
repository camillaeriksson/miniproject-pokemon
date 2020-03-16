import React from "react"
import "./PokemonGeneral.css"

interface State { }

const TYPE_COLORS = {
    normal: "BDBDAE",
    poison: "A55A9D",
    psychic: "F663B1",
    grass: "8BD650",
    ground: "EAC956",
    ice: "96F1FF",
    fire: "FA5543",
    rock: "CDBC72",
    dragon: "8A76FF",
    water: "56AEFF",
    bug: "C2D21F",
    dark: "8B6654",
    fighting: "A85643",
    ghost: "7571D1",
    steel: "C4C2DB",
    flying: "79A3FF",
    electric: "FDE33B",
    fairy: "F9ADFF"
}

interface Props {
    pokemonName: string,
    pokemonIndex: number,
    imgUrl: string,
    types: string[],
    description: string
}

export default class PokemonGeneral extends React.Component<Props, State> {

    private capitalizeWord = (str: string) => {
        if (str.length === 0) return ""
        str = str.replace("-", " ")
        return str[0].toUpperCase() + str.slice(1)
    }

    private removeSymbols = (str: string) => {
        if (str.length === 0) return ""
        return str.replace('\n', ' ').replace('\t', ' ').replace('\f', ' ')
    }

    render() {
        return (
            <>
                <h2>{this.capitalizeWord(this.props.pokemonName)}</h2>
                <p>Index: {this.props.pokemonIndex}</p>
                <img className="pokemon_pic" src={this.props.imgUrl} alt="Pokemon of the day" />
                <div className="types">
                    {this.props.types.map(type => (
                        <span
                            key={type}
                            className="type"
                            style={{
                                //@ts-ignore  // A bit of cheating....
                                backgroundColor: `#${TYPE_COLORS[type]}`,
                                color: "white"
                            }}>
                            {this.capitalizeWord(type)}
                        </span> as React.HTMLAttributes<HTMLSpanElement>
                    ))}
                </div>
                <div className="description">
                    <p>{this.removeSymbols(this.props.description)}</p>
                </div>
            </>
        )
    }
}