import "./App.css";
import EducationTimeline from "./Components/Pages/Education/Education";
import About from "./Components/Pages/About/About";
import Home from "./Components/Pages/Home/Home";
import Header from "./Components/Pages/Navbar/Navbar";
import Skills from "./Components/Pages/Skills/Skills";
import Project from "./Components/Pages/Projects/Project";
import { ContactUs } from "./Components/Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <EducationTimeline />
      <Skills />
      <Project/>
      <ContactUs/>
    </div>
  );
}

export default App;
