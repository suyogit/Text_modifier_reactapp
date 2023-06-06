//import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForrrm from "./components/TextForrm";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="suyog"
        about="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container">
        <TextForrrm heading="Enter text to analyze: " mode={mode} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
