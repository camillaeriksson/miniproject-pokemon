import React, { Fragment } from 'react';
import './App.css';
import Header from '../Header/Header';
import StartPage from "../StartPage/StartPage"
import {
  BrowserRouter,
  Switch,
  Route,
  useParams,
  useLocation
} from "react-router-dom";
import ErrorBoundary from "../Errorboundry/errorboundry";
import CategoryPage from '../CategoryPage/CategoryPage';
import FavouritePage from '../FavouritePage/FavouritePage';
interface Props {
    
}
interface State {
    favoritePokemons: any[],
    
}

export default class App extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props)
    this.state = {
        favoritePokemons: [],
        
    };
}

addToFavorite = (pokemon: string) => {
  this.setState({ favoritePokemons: [...this.state.favoritePokemons, pokemon]})
}

render () {
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
              <FavouritePage favoritePokemons={this.state.favoritePokemons} />
            </Route>
            <Route path="/">
              <StartPage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
}