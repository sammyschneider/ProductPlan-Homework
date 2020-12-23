import { useState, useEffect } from "react";
import './App.css';
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";


function App() {

  useEffect(() => {
    setTimeout(() => {
      console.log("Testing");
    }, 5000);
  }, []);

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


    </div>
  );
}

export default App;
