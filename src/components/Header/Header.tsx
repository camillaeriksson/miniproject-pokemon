import React from "react"
import "./Header.css"
import icon from "./pokemon.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import CategoryPage from "../CategoryPage/CategoryPage"
import StartPage from "../StartPage/StartPage"
import App from "../App/App"

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
            <Router>
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
                            <Link className="links" to="/category">Red</Link>
                            <Link className="links" to="/category">Blue</Link>
                            <Link className="links" to="/category">Green</Link>
                            <Link className="links" to="/category">Pink</Link>
                            <Link className="links" to="/category">Yellow</Link>
                        </div>}

                    <Switch>
                        <Route path="/category">
                            <CategoryPage />
                        </Route>
                    </Switch>
                </header>
            </Router>



        )
    }


}


export default Header