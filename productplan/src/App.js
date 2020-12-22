import { useState, useEffect } from "react";
import './App.css';
import Nav from "./components/Nav.js";


function App() {

  useEffect(() => {
    setTimeout(() => {
      console.log("Testing");
    }, 5000);
  }, []);

  return (
    <div className="App">
      <Nav />
      <div>
        <h1>Product roadmap</h1>
      </div>
    </div>
  );
}

export default App;
