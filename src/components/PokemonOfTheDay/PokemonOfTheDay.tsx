import React from "react"
import "./PokemonOfTheDay.css"
import axios from "axios"
import Modal from "../Modal/modal"
import "../Modal/modal.css"
import PokemonStats from "../PokemonStats/PokemonStats"
import PokemonProfile from "../PokemonProfile/PokemonProfile"
import PokemonGeneral from "../PokemonGeneral/PokemonGeneral"

export interface SpeciesResults {
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

export interface Results {
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

interface Props { }

interface State {
    pokemonName: string,
    imgUrl: string,
    pokemonIndex: number,
    showModal: boolean,
    types: string[],
    description: string,
    height: string,
    weight: string,
    eggGroups: string,
    abilities: string[],
    evs: string,
    hatchSteps: number,
    catchRate: number,
    stats: {
        hp: number,
        attack: number,
        defense: number,
        speed: number,
        specialAttack: number,
        specialDefense: number
    }
}

export default class PokemonOfTheDay extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            pokemonName: "",
            imgUrl: "",
            pokemonIndex: 0,
            showModal: false,
            types: [],
            description: "",
            height: "",
            weight: "",
            eggGroups: "",
            abilities: [],
            evs: "",
            hatchSteps: 0,
            catchRate: 0,
            stats: {
                hp: 0,
                attack: 0,
                defense: 0,
                speed: 0,
                specialAttack: 0,
                specialDefense: 0
            }
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

    private get modal() {
        if (this.state.showModal) {
            return (
                <Modal>
                    <div className="modal_container" onClick={this.toggleModal}>
                        <PokemonGeneral pokemonName={this.state.pokemonName} pokemonIndex={this.state.pokemonIndex} imgUrl={this.state.imgUrl}
                            types={this.state.types} description={this.state.description} />
                        <PokemonStats hp={this.state.stats.hp} attack={this.state.stats.attack} defense={this.state.stats.attack}
                            speed={this.state.stats.speed} specialAttack={this.state.stats.specialAttack} specialDefense={this.state.stats.specialDefense} />
                        <PokemonProfile height={this.state.height} weight={this.state.weight} eggGroups={this.state.eggGroups} abilities={this.state.abilities}
                            evs={this.state.evs} hatchSteps={this.state.hatchSteps} catchRate={this.state.catchRate} />
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
        const pokemonIndex = daysSinceCalendarStart % pokemonLimit
        const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonIndex

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

        const pokemonSpeciesUrl = "https://pokeapi.co/api/v2/pokemon-species/" + pokemonIndex

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

        const imgUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`

        this.setState({
            pokemonName,
            imgUrl,
            pokemonIndex,
            height,
            weight,
            types,
            abilities,
            evs,
            stats: {
                hp,
                attack,
                defense,
                speed,
                specialAttack,
                specialDefense
            }
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
                        <p>Index: {this.state.pokemonIndex}</p>
                    </div>
                </div>
                {this.modal}
            </>
        )
    }
}
