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
    handleFavourite: () => void
}

interface State {
    imgUrl: string,
    liked: boolean,
    showModal: boolean,
    pokemonId: string
}

export default class Card extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props)

        this.state = {
            imgUrl: "",
            liked: false,
            showModal: false,
            pokemonId: ""
        }

        this.handleLike = this.handleLike.bind(this);
    }

    handleLike() {
        this.setState({
            liked: !this.state.liked
        });
    }

    async componentDidMount() {
        const pokemonId = this.props.pokemonId.slice(42, this.props.pokemonId.length - 1)
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
                    <PokemonGeneral pokemonName={this.props.name} pokemonIndex={parseInt(this.props.pokemonId)} imgUrl={this.state.imgUrl} />
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
        const theImgs = this.state.liked ? <img className="pokeLike" src={liked} alt="Noliked" /> : <img className="pokeLike" src={unLike} alt="liked" />
        return (
            <>
                <div onClick={this.toggleModal} className="cardContainer">
                    <div className="pokeball">
                        <h2 onClick={this.handleLike && this.props.handleFavourite}>
                            {theImgs}</h2></div>
                    <img className="imgStyle" src={this.state.imgUrl} alt="A pokemon" />
                    <h1>{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}</h1>
                    <h1>Index:{this.props.pokemonId.slice(42, this.props.pokemonId.length - 1)}</h1>
                </div>
                {this.modal}
            </>
        )
    }
}