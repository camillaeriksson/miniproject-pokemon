import React from 'react'
import './Card.css'
import unLike from "./pokeball.png"
import liked from "./pokemon.png"
import Modal from "../Modal/modal"
import "../Modal/modal.css"
import PokemonGeneral from "../PokemonGeneral/PokemonGeneral"

interface Props {
    name: string,
    pokemonId: string,
    addPokemon: (id: string) => void
}

interface State {
    imgUrl: string,
    liked: boolean,
    showModal: boolean,
    pokemonId: number,
    types: string[],
    description: string
}

export default class Card extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props)

        this.state = {
            imgUrl: "",
            liked: false,
            showModal: false,
            pokemonId: 0,
            types: ["fire"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar ultrices quam vitae interdum. Integer dolor ligula, gravida ac urna ut, suscipit consectetur nisi."
        }

        this.handleLike = this.handleLike.bind(this);
    }

    handleLike() {
        this.setState({
            liked: !this.state.liked
        });
    }

    async componentDidMount() {
        const pokemonId = Number(this.props.pokemonId.slice(42, this.props.pokemonId.length - 1))

        const imgUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonId}.png?raw=true`
        this.setState({
            imgUrl,
            pokemonId
        })
    }

    private get modal() {
        if (this.state.showModal) {
            return (
                <Modal>
                    <div className="modal_container" onClick={this.toggleModal}>
                        <PokemonGeneral pokemonName={this.props.name} pokemonIndex={this.state.pokemonId}
                            imgUrl={this.state.imgUrl} types={this.state.types} description={this.state.description} />
                    </div>
                </Modal >
            )
        }
        return undefined
    }

    private toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }


    render() {
        const pokemonId = this.props.pokemonId.slice(42, this.props.pokemonId.length - 1)
        const imgUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonId}.png?raw=true`
        const theImgs = this.state.liked ? <img className="pokeLike" src={liked} alt="Noliked" /> : <img className="pokeLike" src={unLike} alt="liked" />
        return (
            <>
                <div onClick={this.toggleModal} className="cardContainer">
                    <div className="pokeball">
                        <h2 onClick={this.handleLike}>
                            {theImgs}</h2></div>
                    <img className="imgStyle" src={imgUrl} alt="A pokemon" />
                    <h1>{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}</h1>
                    <h6>Index:{this.props.pokemonId.slice(42, this.props.pokemonId.length - 1)}</h6>
                </div>
                {this.modal}
            </>
        )
    }
}
export function Favourite(props: Props, state: State) {
    const handleFavourite = (e: any) => {
        e.preventDefault();
        props.addPokemon('Pokémon');
    }
    return (
        <div>
            <button onClick={handleFavourite}>Add Pokémon</button>
            <h1>{handleFavourite}</h1>
        </div>
    )
}