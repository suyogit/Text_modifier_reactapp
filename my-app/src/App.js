//import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForrrm from "./components/TextForrm";

function App() {
  return (
    <>
      <Navbar title="suyog" about="About us" />
      {/* <div className="container">
        <TextForrrm heading="Enter text to analyze: " />
      </div> */}
      <About />
    </>
  );
}

export default App;
