import React from 'react'
import './Card.css'

interface Props {

}

interface State {

}

export default class Card extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }
    render() {
        return (
            <div className="cardContainer">
                <h1>Hello</h1>
            </div>

        )
    }
}