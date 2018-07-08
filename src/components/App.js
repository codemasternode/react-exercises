import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar'

class App extends Component {
  render() {
    console.log(Navbar)
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
