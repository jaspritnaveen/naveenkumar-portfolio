import "./App.css";
import EducationTimeline from "./Components/Pages/Education/Education";
import About from "./Components/Pages/About/About";
import Home from "./Components/Pages/Home/Home";
import Header from "./Components/Pages/Navbar/Navbar";
import Skills from "./Components/Pages/Skills/Skills";
import Project from "./Components/Pages/Projects/Project";
import Contact  from "./Components/Pages/Contact/Contact";
import Footer from "./Components/Pages/Footer/Footer";
// import Welcome from "./Components/Pages/Welcome/Welcome";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<EducationTimeline />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

      {/* <Welcome/> */}
    </div>
  );
}

export default App;
