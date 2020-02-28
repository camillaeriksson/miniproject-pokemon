import React from "react"
import './Header.css'
interface State {

}
interface Props {

}
class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

    }


    render() {
        return(
            <div>
                <h1>POKEPEDIA</h1>
                <i className="fas fa-bars"></i>
            </div>

        )
    }


}


export default Header