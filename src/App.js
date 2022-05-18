import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Resume from "./components/Resume"
import Navbar from "./components/Navbar";
import Side_Project from "./components/Side_Project";
import Skills from "./components/Skills";
import './index.css'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Side_Project />
      <Contact />
    </div>
  );
}

export default App;
