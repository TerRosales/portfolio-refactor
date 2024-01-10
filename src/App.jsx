import "./global.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" />
        <Route path="/form" />
      </Routes>
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
