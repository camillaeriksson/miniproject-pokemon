import React from 'react';
import './App.css';
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
    </div>
  );
}

export default App;
