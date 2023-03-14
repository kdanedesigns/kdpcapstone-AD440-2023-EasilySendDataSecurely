import React from "react";
import "./App.css";
import Header from "./components/Header";
import SingleComponent from "./components/SingleComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="inputContainers">
        <SingleComponent />
      </div>
    </div>
  );
}

export default App;
