import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      avengers: ['Iron-man', 'Black Widow']
    };
  }





  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Avengers: by Erica Thompson.</h1>
        </header>
        {this.state.avengers.map(eachInArray => <div key={eachInArray}>{eachInArray}</div>)}
      </div>
    );
  }
}

export default App;
