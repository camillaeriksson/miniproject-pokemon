import React from 'react'
import './Card.css'
import unLike from "./pokeball.png"
import liked from "./pokemon.png"

interface Props {
    name: string,
    pokemonId: string,
    addPokemon: (id:string) => void
}

interface State {
    imgUrl: string,
    liked: boolean
}

export default class Card extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props)

        this.state = {
            imgUrl: "",
            liked: false
        }

        this.handleLike = this.handleLike.bind(this);
    }

    handleLike() {
        this.setState({
            liked: !this.state.liked
        });
    }


    async componentDidMount() {
        /* const pokemonId = this.props.pokemonId.slice(42, this.props.pokemonId.length - 1)
        const imgUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonId}.png?raw=true`
        this.setState({
            imgUrl,
        }) */
    }

    render() {
        const pokemonId = this.props.pokemonId.slice(42, this.props.pokemonId.length - 1)
        const imgUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonId}.png?raw=true`
        const theImgs = this.state.liked ? <img className="pokeLike" src={liked} alt="Noliked" /> : <img className="pokeLike" src={unLike} alt="liked" />
        return (
            <div className="cardContainer">
                <div className="pokeball">
                    <h2 onClick={this.handleLike}>
                        {theImgs}</h2></div>
                <img className="imgStyle" src={imgUrl} alt="A pokemon" />
                <h1>{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}</h1>
                <h6>Index:{this.props.pokemonId.slice(42, this.props.pokemonId.length - 1)}</h6>
            </div>
        )
    }
}
export function Favourite(props: Props, state: State) {
    const handleFavourite=(e:any)=>{
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