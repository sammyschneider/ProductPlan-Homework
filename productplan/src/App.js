import { useState, useEffect } from "react";
import React from 'react';
import './App.css';
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Lane from "./components/Lane.js";


class App extends React.Component {

  state = {
    showLane : false
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        showLane: true
      })
    }, 5000);
}
  render = () => {
    return (
      <div className="App">
        <Nav />
        <div className="main-tabs">
          <h1>Product roadmap</h1>
          <h6>Roadtrip</h6>
          <h6>Planning board</h6>
          <h6>Parking lot</h6>
        </div>
        <Main />
        {this.state.showLane ? <Lane /> : null}
      </div>
    )
  }
}

export default App;
