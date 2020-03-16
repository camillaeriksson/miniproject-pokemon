import React from "react"
import "./PokemonProfile.css"

interface State { }

interface Props {
    height: string,
    weight: string,
    eggGroups: string,
    abilities: string[],
    evs: string,
    hatchSteps: number,
    catchRate: number
}

export default class PokemonProfile extends React.Component<Props, State> {

    private capitalizeWord = (str: string) => {
        if (str.length === 0) return ""
        str = str.replace("-", " ")
        return str[0].toUpperCase() + str.slice(1)
    }
    render() {
        return (
            <div className="profile">
                <h5>Profile</h5>
                <p>Height: {this.props.height} dm</p>
                <p>Weight: {this.props.weight} hg</p>
                <p>Catch rate: {this.props.catchRate}%</p>
                <p>Egg groups: {this.capitalizeWord(this.props.eggGroups)}</p>
                <p>Hatch steps: {this.props.hatchSteps}</p>
                <p>Abilities: {this.props.abilities}</p>
                <p>EVs: {this.props.evs}</p>
            </div>
        )
    }
}