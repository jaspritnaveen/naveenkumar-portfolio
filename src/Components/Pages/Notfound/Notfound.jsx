import React from "react";
import { useNavigate } from "react-router-dom";
import "./Notfound.css";

const Notfound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found d-flex flex-column justify-content-center align-items-center text-center">
      <h2 className="error-code">404</h2>
      <h1 className="error-text">Oops! Page Not Found</h1>
      <p className="error-desc">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <button className="home-btn" onClick={() => navigate("/")}>
        Go Back Home
      </button>
    </div>
  );
};

export default Notfound;
