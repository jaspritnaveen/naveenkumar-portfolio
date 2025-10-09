import React from "react";
import "./Skills.css";

import Html from "../../../Assets/Skills/html.png";
import Css from "../../../Assets/Skills/css.png";
import JavaScript from "../../../Assets/Skills/javascript.png";
import Bootstrap from "../../../Assets/Skills/bootstrap.png";
import ReactImg from "../../../Assets/Skills/react.png";
import Java from "../../../Assets/Skills/java.png";
import Github from "../../../Assets/Skills/github.png";
import sqlimg from "../../../Assets/Skills/sql.png";

const Skills = () => {
  // All skills stored in one array
  const skills = [
    { img: Html, name: "HTML" },
    { img: Css, name: "CSS" },
    { img: JavaScript, name: "JavaScript" },
    { img: Bootstrap, name: "Bootstrap" },
    { img: ReactImg, name: "React" },
    { img: sqlimg, name: "SQL" },
    { img: Java, name: "Java" },
    { img: Github, name: "GitHub" },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="mb-5">My Skills</h2>
      <div className="skills-slider">
        <div className="skills-track">
          {/* Render skills twice for seamless infinite scroll effect */}
          {[...skills, ...skills].map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.img} className="skill-icon" alt={skill.name} />
              <h4>{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
