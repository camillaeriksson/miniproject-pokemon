import React from "react"
import "./PokemonStats.css"

interface State { }

interface Props {
    hp: number,
    attack: number,
    defense: number,
    speed: number,
    specialAttack: number,
    specialDefense: number
}

export default class PokemonStats extends React.Component<Props, State> {
    render() {
        return (
            <div className="progress_container">
                <p>HP</p>
                <div className="progress">
                    <div className="progress-bar"
                        role="progressbar"
                        style={{
                            width: `${this.props.hp}%`,
                        }}
                        //@ts-ignore // A bit of cheating...
                        aria-valuenow="25"
                        //@ts-ignore // A bit of cheating...
                        aria-valuemin="0"
                        //@ts-ignore // A bit of cheating...
                        aria-valuemax="20">
                        <small>{this.props.hp}</small>
                    </div>
                </div>
                <p>Attack</p>
                <div className="progress">
                    <div className="progress-bar"
                        role="progressbar"
                        style={{
                            width: `${this.props.attack}%`,
                        }}
                        //@ts-ignore // A bit of cheating...
                        aria-valuenow="25"
                        //@ts-ignore // A bit of cheating...
                        aria-valuemin="0"
                        //@ts-ignore // A bit of cheating...
                        aria-valuemax="20">
                        <small>{this.props.attack}</small>
                    </div>
                </div>
                <p>Defense</p>
                <div className="progress">
                    <div className="progress-bar"
                        role="progressbar"
                        style={{
                            width: `${this.props.defense}%`,
                        }}
                        //@ts-ignore // A bit of cheating...
                        aria-valuenow="25"
                        //@ts-ignore // A bit of cheating...
                        aria-valuemin="0"
                        //@ts-ignore // A bit of cheating...
                        aria-valuemax="20">
                        <small>{this.props.defense}</small>
                    </div>
                </div>
                <p>Speed</p>
                <div className="progress">
                    <div className="progress-bar"
                        role="progressbar"
                        style={{
                            width: `${this.props.speed}%`,
                        }}
                        //@ts-ignore // A bit of cheating...
                        aria-valuenow="25"
                        //@ts-ignore // A bit of cheating...
                        aria-valuemin="0"
                        //@ts-ignore // A bit of cheating...
                        aria-valuemax="20">
                        <small>{this.props.speed}</small>
                    </div>
                </div>
                <p>Special attack</p>
                <div className="progress">
                    <div className="progress-bar"
                        role="progressbar"
                        style={{
                            width: `${this.props.specialAttack}%`,
                        }}
                        //@ts-ignore // A bit of cheating...
                        aria-valuenow="25"
                        //@ts-ignore // A bit of cheating...
                        aria-valuemin="0"
                        //@ts-ignore // A bit of cheating...
                        aria-valuemax="20">
                        <small>{this.props.specialAttack}</small>
                    </div>
                </div>
                <p>Special defense</p>
                <div className="progress">
                    <div className="progress-bar"
                        role="progressbar"
                        style={{
                            width: `${this.props.specialDefense}%`,
                        }}
                        //@ts-ignore // A bit of cheating...
                        aria-valuenow="25"
                        //@ts-ignore // A bit of cheating...
                        aria-valuemin="0"
                        //@ts-ignore // A bit of cheating...
                        aria-valuemax="20">
                        <small>{this.props.specialDefense}</small>
                    </div>
                </div>
            </div>
        )
    }
}
