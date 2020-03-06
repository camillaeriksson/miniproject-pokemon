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


function App() {
  return (
    <div className="App">
      <Header />
      <StartPage />
      <CategoryPage />
    </div>
  );
}

export default App;
