//import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForrrm from "./components/TextForrm";

function App() {
  const [mode, setMode] = useState("dark");
  return (
    <>
      <Navbar title="suyog" about="About us" mode={mode} />
      <div className="container">
        <TextForrrm heading="Enter text to analyze: " />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
