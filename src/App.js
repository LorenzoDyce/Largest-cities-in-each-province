import React, { Component } from 'react';
import './App.css';
import Alberta from './components/Alberta';
import BritishColumbia from './components/BritishColumbia';
import Manitoba from './components/Manitoba'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Alberta />
        <BritishColumbia />
        <Manitoba/>
      </div>
    );
  }
}

export default App;
