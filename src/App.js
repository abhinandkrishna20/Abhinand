import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Services from "./components/Services";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
      </BrowserRouter>
    </div>
  );
}
