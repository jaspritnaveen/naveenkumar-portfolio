import "./App.css";
import EducationTimeline from "./Components/Education/Education";
import About from "./Components/Pages/About/About";
import Home from "./Components/Pages/Home/Home";
import Header from "./Components/Pages/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About/>
      <EducationTimeline/>
    </div>
  );
}

export default App;
