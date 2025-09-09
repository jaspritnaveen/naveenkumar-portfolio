import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicExample from "./Components/Pages/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    
    <BasicExample />

    <Home/>
  </React.StrictMode>
);
