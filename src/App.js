import React, { Component } from 'react';
import sym from './symmetry.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={sym} className="App-cube rotate-img" alt="cube" height={100} width={100} style={{shadow: '1px'}}/>
        </header>
      </div>
    );
  }
}

export default App;
