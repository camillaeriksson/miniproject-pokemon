import React from "react"
import PokemonOfTheDay from "../PokemonOfTheDay/PokemonOfTheDay"
import ErrorBoundary from "../Errorboundry/errorboundry"
import "./StartPage.css"

interface Props {

}

interface State {

}

class StartPage extends React.Component<Props, State> {

    render() {
        return (
            <ErrorBoundary>
                <div className="background_img">
                    <PokemonOfTheDay />
                </div>
            </ErrorBoundary>
        )
    }
}

export default StartPage