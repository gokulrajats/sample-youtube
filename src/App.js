import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DashBoard from './DashBoard';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>SAMPLE YOUTUBE <img src={logo} className="App-logo" alt="logo" /></h1>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign In
        </a>
      </header>
      <Switch>
      <Route exact path="/" component={SignIn}/>
        <Route  path="/dashboard" component={DashBoard}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
