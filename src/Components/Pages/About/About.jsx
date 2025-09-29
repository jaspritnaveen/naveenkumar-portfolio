import React from "react";
import "./About.css";
import professionalimg from "../../../Assets/professionalimg.png";
import resume from "../../../Assets/Resume/Naveenkumarresume.pdf";

const About = () => {
  return (
    <div className="about-page">
      <div className="text-center mb-5">
        <h2 className="about-heading">About Me</h2>
        <p className="about-subtitle">
          Get to know more about my background, education, and professional
          journey
        </p>
      </div>

      <div className="container">
        <div className="row">
          {/* Left Column – Image */}
          <div className="col-12 col-md-5 d-flex justify-content-center mb-4 mb-md-0">
            <img
              src={professionalimg}
              alt="Naveenkumar"
              className="about-img img-fluid"
            />
          </div>

          {/* Right Column – Content */}
          <div className="col-12 col-md-7">
            <h3>Who am I?</h3>

            <p className="about-intro">
              I am an inquisitive and sincere individual, always eager to expand
              my skills and knowledge. Having completed my B.E. in Computer
              Science and Engineering, I am skilled in HTML, CSS, JavaScript,
              Bootstrap, and React.js. As a driven computer science engineer, I
              am dedicated to utilizing my technical expertise to drive
              innovation and make meaningful contributions to impactful
              projects.
            </p>

            <ul className="list-unstyled quick-info">
              <li>
                <strong>Name:</strong> Naveenkumar R
              </li>
              <li>
                <strong>Role:</strong> Frontend Developer
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:jaspritnaveen12@gmail.com">
                  jaspritnaveen12@gmail.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+916383146128">+91 63831 46128</a>
              </li>
              <li>
                <strong>Address:</strong> Thandukkaranpalayam, Avinashi,
                Tiruppur, Tamil Nadu, India – 641655
              </li>
              <li>
                <strong>Date of Birth:</strong> March 12, 2004
              </li>
            </ul>

            {/* Download Button */}
            <div className="about-button mt-3">
              <a href={resume} download="Naveenkumar_Resume.pdf">
                <button type="button" className="btn resume-btn">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
