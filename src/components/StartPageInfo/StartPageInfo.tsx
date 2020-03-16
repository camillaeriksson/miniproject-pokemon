import React from "react"
import ErrorBoundary from "../Errorboundry/errorboundry"
import "./StartPageInfo.css"

interface Props { }

interface State { }

export default class StartPageInfo extends React.Component<Props, State> {

    render() {
        return (
            <ErrorBoundary>
                <div className="info_container">
                </div>
            </ErrorBoundary>
        )
    }
}