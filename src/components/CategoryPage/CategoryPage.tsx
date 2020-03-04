import React from 'react'
import './CategoryPage.css'
import Card from '../Card/Card'

interface Props {

}

interface State {

}

export default class CategoryPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        )
    }
}
