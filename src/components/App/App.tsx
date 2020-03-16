import React from 'react'
import './App.css'
import Header from '../Header/Header'
import StartPage from '../StartPage/StartPage'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'
import ErrorBoundary from '../Errorboundry/errorboundry'
import CategoryPage from '../CategoryPage/CategoryPage'
import FavoritePage from '../FavoritePage/FavoritePage'

export type Pokemon = {
  name: string,
  index: number,
  imgUrl: string,
}

interface Props { }

interface State {
  favoritePokemons: Pokemon[],

}

export default class App extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props)
    this.state = {
      favoritePokemons: [],

    }
  }

  addToFavorite = (pokemon: Pokemon) => {
    this.setState({ favoritePokemons: [...this.state.favoritePokemons, pokemon] })
  }

  render() {
    console.log(this.state)
    return (
      <ErrorBoundary>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Switch>
              <Route path="/category/:color">
                <CategoryPage addToFavorite={this.addToFavorite} />
              </Route>
              <Route path="/favourites/">
                <FavoritePage favoritePokemons={this.state.favoritePokemons} />
              </Route>
              <Route path="/">
                <StartPage />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </ErrorBoundary>
    )
  }
}