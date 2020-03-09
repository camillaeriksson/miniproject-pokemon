import React from 'react'
import ReactDOM from "react-dom"

const modalRoot = document.getElementById('modal-root') as HTMLDivElement

interface Props {

}

export default class Modal extends React.Component<Props> {

    el: HTMLDivElement

    constructor(props: Props) {
        super(props)
        this.el = document.createElement('div')
    }

    componentDidMount() {
        modalRoot.appendChild(this.el)
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el)
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }
}