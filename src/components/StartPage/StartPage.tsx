import React from "react"
import PokemonOfTheDay from "../PokemonOfTheDay/PokemonOfTheDay"
import ErrorBoundary from "../Errorboundry/errorboundry"

interface Props {

}

interface State {

}

class StartPage extends React.Component<Props, State> {

    render() {
        return (
            <ErrorBoundary>
                <PokemonOfTheDay />
            </ErrorBoundary>
        )
    }
}

export default StartPage