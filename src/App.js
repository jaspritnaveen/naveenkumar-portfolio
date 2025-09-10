import "./App.css";
import About from "./Components/Pages/About/About";
import Home from "./Components/Pages/Home/Home";
import Header from "./Components/Pages/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About/>
    </div>
  );
}

export default App;
