import React from "react";
import "./Hamburger.css";
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';


interface State {

}
interface Props {

}


class Hambuger extends React.Component<Props, State> {
    showSettings (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();


    }

    render() {
        return (
            <Menu customBurgerIcon={ <i onClick={ this.showSettings } className="fas fa-bars"/> }>
                <Link to="/">Home</Link>
            </Menu>
          );
        


    }
}

export default Hambuger