import React from "react"
import "./PokemonOfTheDay.css"
import axios from "axios"
import Modal from "../Modal/modal"
import "../Modal/modal.css"

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
    pokemonName: null | string,
    imgUrl: string,
    pokemonIndexOfToday: number,
    showModal: boolean,
    types: string[],
    description: string,
    stats: {
        hp: string,
        attack: string,
        defense: string,
        speed: string,
        specialAttack: string,
        specialDefense: string
    },
    height: string,
    weight: string,
    eggGroup: string,
    abilities: string[],
    genderRatioMale: string,
    genderRatioFemale: string,
    evs: string,
    hatchSteps: string
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
                hp: "",
                attack: "",
                defense: "",
                speed: "",
                specialAttack: "",
                specialDefense: ""
            },
            height: "",
            weight: "",
            eggGroup: "",
            abilities: [],
            genderRatioMale: "",
            genderRatioFemale: "",
            evs: "",
            hatchSteps: ""
        }
    }

    private toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    private get modal() {
        if (this.state.showModal) {
            return (
                <Modal>
                    <div className="modal_container" onClick={this.toggleModal}>
                        <h1>{this.state.pokemonName}</h1>
                        <button onClick={this.toggleModal}>CLOSE MODAL</button>
                    </div>
                </Modal>
            )
        }
    }

    async componentDidMount() {
        const pokemonLimit = 963
        const daysSinceCalendarStart = 1 + Math.floor(new Date().getTime() / 1000 / 60 / 60 / 24)
        const pokemonIndexOfToday = daysSinceCalendarStart % pokemonLimit
        const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonIndexOfToday

        const res = await axios.get<Results>(url)

        const pokemonName = res.data.name
        const height = res.data.height
        const weight = res.data.weight
        const types = res.data.types.map(type => type.type.name)
        const abilities = res.data.abilities.map(ability => {
            return ability.ability.name
        })
        const evs = res.data.stats.filter(stat => {
            if (stat.effort > 0) {
                return true
            }
            return false
        }).map(stat => {
            return `${stat.effort} ${stat.stat.name}`
        }).join(', ')

        let hp, attack, defense, speed, specialAttack, specialDefense

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
            abilities
        })
    }

    render() {
        return (
            <>
                <div onClick={this.toggleModal} className="pokemon_container">
                    <h1 className="heading_mobile">Pokemon of the day</h1>
                    <img className="pokemon_pic" src={this.state.imgUrl} alt="Pokemon of the day" />
                    <div className="heading_and_text">
                        <h1 className="heading_desktop">Pokemon of the day</h1>
                        <h2>{this.state.pokemonName?.toLowerCase().split(' ').map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join('')}</h2>
                        <p>Index: {this.state.pokemonIndexOfToday}</p>
                    </div>
                </div>
                {this.modal}
            </>
        )
    }
}

export default PokemonOfTheDay