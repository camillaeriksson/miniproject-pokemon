import React from "react"
import PokemonOfTheDay from "../PokemonOfTheDay/PokemonOfTheDay"

interface Props {

}

interface State {

}

class StartPage extends React.Component<Props, State> {

    render() {
        return (
            <PokemonOfTheDay />
        )
    }
}

export default StartPage