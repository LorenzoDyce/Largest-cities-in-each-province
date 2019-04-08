import React, { Component } from 'react';
import './App.css';
import Alberta from './components/Alberta';
import BritishColumbia from './components/BritishColumbia';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Alberta />
        <BritishColumbia />
      </div>
    );
  }
}

export default App;
