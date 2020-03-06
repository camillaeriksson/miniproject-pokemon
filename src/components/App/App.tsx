import React from 'react';
import './App.css';
import CategoryPage from '../CategoryPage/CategoryPage';
import Header from '../Header/Header';
import StartPage from "../StartPage/StartPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ErrorBoundary from "../Errorboundry/errorboundry";


function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <StartPage />
        <CategoryPage />
      </div>
    </ErrorBoundary>
  );
}

export default App;
