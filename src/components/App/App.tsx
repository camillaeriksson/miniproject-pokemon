import React from 'react';
import './App.css';
import Header from '../Header/Header';
import StartPage from "../StartPage/StartPage"
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import CategoryPage from '../CategoryPage/CategoryPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
            <Route path="/category/:color">
                <CategoryPage />
            </Route>
            <Route path="/">
                <StartPage />
            </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
