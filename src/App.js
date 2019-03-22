import React, { Component } from "react";
import './App.css'

class App extends Component {
  handleClick(e) {
    const body = document.querySelector('body')
    body.style.backgroundColor = '#79b4c4'
  }

  render() {
    return (
      <div className="App">
        <h1>GreenAir Air Pollution Tracker</h1>
        <button onClick={this.handleClick}>Change the background color</button>
      </div>
    );
  }
}

export default App;
