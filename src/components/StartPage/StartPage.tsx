import React from "react"
import PokemonOfTheDay from "../PokemonOfTheDay/PokemonOfTheDay"

interface Props {

}

interface State {

}

class StartPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }
    render() {
        return (
            <PokemonOfTheDay />
        )
    }
}

export default StartPage