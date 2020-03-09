import React from "react"
import "./Header.css"
import icon from "./pokemon.png"
import { Link } from "react-router-dom"

interface State {
    isOpen: Boolean
}
interface Props {

}
class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            isOpen: false,

        }

    }

    handleOnClick = () => {
        this.setState({ isOpen: !this.state.isOpen })

    }


    render() {
        return (
            <header className="header">
                <div className="headerItems">
                    <i onClick={this.handleOnClick} className="fas fa-bars" />
                    <Link to="/">
                        <img className="pokemonTitle"
                            src="https://fontmeme.com/permalink/200304/fe08af5a72abf719bf67178557262a8f.png"
                            alt="Title" />
                    </Link>
                    <Link to="">
                        <img className="pokemonIcon" src={icon} alt="icon" />
                    </Link>
                </div>
                {this.state.isOpen &&
                    <div className="linkDiv" style={{ height: "260px" }}>
                        <Link className="links" to="/category/red">Red</Link>
                        <Link className="links" to="/category/blue">Blue</Link>
                        <Link className="links" to="/category">Green</Link>
                        <Link className="links" to="/category">Pink</Link>
                        <Link className="links" to="/category">Yellow</Link>
                    </div>}
            </header>
        )
    }


}


export default Header