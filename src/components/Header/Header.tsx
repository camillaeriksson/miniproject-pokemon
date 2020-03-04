import React from "react"
import "./Header.css"
import icon from "./assets/icons/pokemon.png"
import Hambuger from "../Hamburger/Hamburger"
import { BrowserRouter, Link } from "react-router-dom"

interface State {
isOpen: Boolean
}
interface Props {

}
class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            isOpen: false
        }

    }

    handleOnClick = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }


    render() {
        return (
            <BrowserRouter>
           <header className="header">
               <i onClick={ this.handleOnClick } className="fas fa-bars"></i>
               <div className="linkDiv">
                   <Link className="links" to="/">Red</Link>
                   <Link  className="links" to="/">Blue</Link>
                   <Link className="links" to="/">Green</Link>
                   <Link className="links" to="/">Pink</Link>
                   <Link className="links" to="/">Yellow</Link>
               </div>
           </header>
            </BrowserRouter>
            /* <div>
                <div className="h1">
                    <h1>POKEPEDIA</h1>
                </div>
                <div className="icon">
                    <a href="">
                        <img src={icon} alt="icon" />
                    </a>
                </div>
            </div> */
            

        )
    }


}


export default Header