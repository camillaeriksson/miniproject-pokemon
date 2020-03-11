import React from "react"
import "./PokemonOfTheDay.css"
import axios from "axios"
import Modal from "../Modal/modal"
import "../Modal/modal.css"



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

interface SpeciesResults {
    flavor_text_entries: Array<{
        flavor_text: string,
        language: {
            name: string
        }
    }>,
    capture_rate: number
    egg_groups: Array<{
        name: string
    }>,
    hatch_counter: number
}

interface Results {
    name: string,
    height: string,
    weight: string,
    abilities: Array<{
        ability: {
            name: string
        }
    }>,
    stats: Array<{
        stat: {
            name: string
        }
        base_stat: number,
        effort: number
    }>,
    types: Array<{
        type: {
            name: string
        }
    }>
}

interface Props {

}

interface State {
    pokemonName: string,
    imgUrl: string,
    pokemonIndexOfToday: number,
    showModal: boolean,
    types: string[],
    description: string,
    stats: {
        hp: number,
        attack: number,
        defense: number,
        speed: number,
        specialAttack: number,
        specialDefense: number
    },
    height: string,
    weight: string,
    eggGroups: string,
    abilities: string[],
    evs: string,
    hatchSteps: number,
    catchRate: number
}

class PokemonOfTheDay extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            pokemonName: "",
            imgUrl: "",
            pokemonIndexOfToday: 0,
            showModal: false,
            types: [],
            description: "",
            stats: {
                hp: 0,
                attack: 0,
                defense: 0,
                speed: 0,
                specialAttack: 0,
                specialDefense: 0
            },
            height: "",
            weight: "",
            eggGroups: "",
            abilities: [],
            evs: "",
            hatchSteps: 0,
            catchRate: 0
        }
    }

    private toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    private capitalizeWord = (str: string) => {
        if (str.length === 0) return "";
        str = str.replace("-", " ")
        return str[0].toUpperCase() + str.slice(1);
    }

    private removeSymbols = (str: string) => {
        if (str.length === 0) return "";
        return str.replace('\n', ' ').replace('\t', ' ').replace('\f', ' ');
    }

    private get modal() {
        if (this.state.showModal) {
            return (
                <Modal>
                    <div className="modal_container" onClick={this.toggleModal}>
                        <h2>{this.capitalizeWord(this.state.pokemonName)}</h2>
                        <p>Index: {this.state.pokemonIndexOfToday}</p>
                        <img className="pokemon_pic" src={this.state.imgUrl} alt="Pokemon of the day" />
                        <div className="types">
                            {this.state.types.map(type => (
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
                            <p>{this.removeSymbols(this.state.description)}</p>
                        </div>
                        <div className="progress_container">
                            <p>HP</p>
                            <div className="progress">
                                <div className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        width: `${this.state.stats.hp}%`,
                                    }}
                                    //@ts-ignore // A bit of cheating...
                                    aria-valuenow="25"
                                    //@ts-ignore // A bit of cheating...
                                    aria-valuemin="0"
                                    //@ts-ignore // A bit of cheating...
                                    aria-valuemax="20">
                                    <small>{this.state.stats.hp}</small>
                                </div>
                            </div>
                            <p>Attack</p>
                            <div className="progress">
                                <div className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        width: `${this.state.stats.attack}%`,
                                    }}
                                    //@ts-ignore // A bit of cheating...
                                    aria-valuenow="25"
                                    //@ts-ignore // A bit of cheating...
                                    aria-valuemin="0"
                                    //@ts-ignore // A bit of cheating...
                                    aria-valuemax="20">
                                    <small>{this.state.stats.attack}</small>
                                </div>
                            </div>
                            <p>Defense</p>
                            <div className="progress">
                                <div className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        width: `${this.state.stats.defense}%`,
                                    }}
                                    //@ts-ignore // A bit of cheating...
                                    aria-valuenow="25"
                                    //@ts-ignore // A bit of cheating...
                                    aria-valuemin="0"
                                    //@ts-ignore // A bit of cheating...
                                    aria-valuemax="20">
                                    <small>{this.state.stats.defense}</small>
                                </div>
                            </div>
                            <p>Speed</p>
                            <div className="progress">
                                <div className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        width: `${this.state.stats.speed}%`,
                                    }}
                                    //@ts-ignore // A bit of cheating...
                                    aria-valuenow="25"
                                    //@ts-ignore // A bit of cheating...
                                    aria-valuemin="0"
                                    //@ts-ignore // A bit of cheating...
                                    aria-valuemax="20">
                                    <small>{this.state.stats.speed}</small>
                                </div>
                            </div>
                            <p>Special attack</p>
                            <div className="progress">
                                <div className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        width: `${this.state.stats.specialAttack}%`,
                                    }}
                                    //@ts-ignore // A bit of cheating...
                                    aria-valuenow="25"
                                    //@ts-ignore // A bit of cheating...
                                    aria-valuemin="0"
                                    //@ts-ignore // A bit of cheating...
                                    aria-valuemax="20">
                                    <small>{this.state.stats.specialAttack}</small>
                                </div>
                            </div>
                            <p>Special defense</p>
                            <div className="progress">
                                <div className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        width: `${this.state.stats.specialDefense}%`,
                                    }}
                                    //@ts-ignore // A bit of cheating...
                                    aria-valuenow="25"
                                    //@ts-ignore // A bit of cheating...
                                    aria-valuemin="0"
                                    //@ts-ignore // A bit of cheating...
                                    aria-valuemax="20">
                                    <small>{this.state.stats.specialDefense}</small>
                                </div>
                            </div>
                        </div>
                        <div className="profile">
                            <h5>Profile</h5>
                            <p>Height: {this.state.height} dm</p>
                            <p>Weight: {this.state.weight} hg</p>
                            <p>Catch rate: {this.state.catchRate}%</p>
                            <p>Egg groups: {this.capitalizeWord(this.state.eggGroups)}</p>
                            <p>Hatch steps: {this.state.hatchSteps}</p>
                            <p>Abilities: {this.state.abilities}</p>
                            <p>EVs: {this.state.evs}</p>
                        </div>
                        <button className="myButton" onClick={this.toggleModal}>Close</button>
                    </div>
                </Modal >
            )
        }
        return undefined
    }

    async componentDidMount() {

        const pokemonLimit = 963
        const daysSinceCalendarStart = 1 + Math.floor(new Date().getTime() / 1000 / 60 / 60 / 24)
        const pokemonIndexOfToday = daysSinceCalendarStart % pokemonLimit
        const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonIndexOfToday
        const pokemonSpeciesUrl = "https://pokeapi.co/api/v2/pokemon-species/" + pokemonIndexOfToday

        const res = await axios.get<Results>(url)

        const pokemonName = res.data.name
        const height = res.data.height
        const weight = res.data.weight
        const types = res.data.types.map(type => type.type.name)
        const abilities = res.data.abilities.map(ability => {
            return this.capitalizeWord(ability.ability.name)
        })
        const evs = res.data.stats.filter(stat => {
            if (stat.effort > 0) {
                return true
            }
            return false
        }).map(stat => {
            return `${stat.effort} ${stat.stat.name
                .toLowerCase()
                .split('-')
                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')}`
        }).join(', ')

        await axios.get<SpeciesResults>(pokemonSpeciesUrl).then(res => {
            let description = ""
            res.data.flavor_text_entries.some(flavor => {
                if (flavor.language.name === "en") {
                    description = flavor.flavor_text
                    return
                }
            })

            const catchRate = Math.round((100 / 255) * res.data['capture_rate'])

            const eggGroups = res.data['egg_groups'].map(group => {
                return group.name
            }).join(", ")

            const hatchSteps = 255 * (res.data['hatch_counter'] * 1)

            this.setState({
                description,
                catchRate,
                eggGroups,
                hatchSteps
            })
        })

        let hp: number = 0
        let attack: number = 0
        let defense: number = 0
        let speed: number = 0
        let specialAttack: number = 0
        let specialDefense: number = 0

        console.log(this.state.description)
        res.data.stats.map(stat => {
            switch (stat.stat.name) {
                case 'hp':
                    hp = stat['base_stat'];
                    break;
                case 'attack':
                    attack = stat['base_stat'];
                    break;
                case 'defense':
                    defense = stat['base_stat'];
                    break;
                case 'speed':
                    speed = stat['base_stat'];
                    break;
                case 'special-attack':
                    specialAttack = stat['base_stat'];
                    break;
                case 'special-defense':
                    specialDefense = stat['base_stat'];
                    break;
            }
        })

        const imgUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndexOfToday}.png?raw=true`

        this.setState({
            pokemonName,
            imgUrl,
            pokemonIndexOfToday,
            height,
            weight,
            types,
            abilities,
            stats: {
                hp,
                attack,
                defense,
                speed,
                specialAttack,
                specialDefense
            },
            evs
        })
    }

    render() {
        return (
            <>
                <div onClick={this.toggleModal} className="pokemon_container">
                    <h2 className="heading_mobile">Pokemon of the day</h2>
                    <img className="pokemon_pic" src={this.state.imgUrl} alt="Pokemon of the day" />
                    <div className="heading_and_text">
                        <h1 className="heading_desktop">Pokemon of the day</h1>
                        <h2>{this.capitalizeWord(this.state.pokemonName)}</h2>
                        <p>Index: {this.state.pokemonIndexOfToday}</p>
                    </div>
                </div>
                {this.modal}
            </>
        )
    }
}

export default PokemonOfTheDay
