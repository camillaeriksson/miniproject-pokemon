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

    closeDropdown = () => {
        this.setState({ isOpen: false })
    }


    render() {



        return (
            <header className="header">
                <div className="headerItems">
                    <i onClick={this.handleOnClick} className="fas fa-bars" />
                    <Link to="/">
                        <img onClick={this.closeDropdown} className="pokemonTitle"
                            /* src="https://fontmeme.com/permalink/200304/fe08af5a72abf719bf67178557262a8f.png" */
                            src="https://fontmeme.com/permalink/200316/604317c00ac818f07a44974dc1f959f0.png"
                            alt="Title" />
                    </Link>
                    <Link to="/favourites/">
                        <img onClick={this.closeDropdown} className="pokemonIcon" src={icon} alt="icon" />
                    </Link>
                </div>
                {this.state.isOpen &&
                    <div onClick={this.handleOnClick} className="linkDiv" style={{ display: "block" }}>
                        <Link className="links" to={{
                            pathname: '/category/red',
                            state: {
                                color: "red"
                            }
                        }}>Red</Link>

                        <Link className="links" to={{
                            pathname: '/category/blue',
                            state: {
                                color: "blue"
                            }
                        }}>Blue</Link>

                        <Link className="links" to={{
                            pathname: '/category/green',
                            state: {
                                color: "green"
                            }
                        }}>Green</Link>

                        <Link className="links" to={{
                            pathname: '/category/pink',
                            state: {
                                color: "pink"
                            }
                        }}>Pink</Link>

                        <Link className="links" to={{
                            pathname: '/category/yellow',
                            state: {
                                color: "yellow"
                            }
                        }}>Yellow</Link>

                        <Link className="links" to={{
                            pathname: '/category/purple',
                            state: {
                                color: "purple"
                            }
                        }}>Purple</Link>

                        <Link className="links" to={{
                            pathname: '/category/black',
                            state: {
                                color: "black"
                            }
                        }}>Black</Link>

                        <Link className="links" to={{
                            pathname: '/category/white',
                            state: {
                                color: "white"
                            }
                        }}>White</Link>

                    </div>}
            </header>
        )
    }


}


export default Header