import React from "react";
import "./Skills.css";

import Html from "../../../Assets/Skills/html.png";
import Css from "../../../Assets/Skills/css.png";
import JavaScript from "../../../Assets/Skills/javascript.png";
import Bootstrap from "../../../Assets/Skills/bootstrap.png";
import ReactImg from "../../../Assets/Skills/react.png";
import Figma from "../../../Assets/Skills/figma.png";
import Java from "../../../Assets/Skills/java.png";
import NodeJs from "../../../Assets/Skills/nodejs.png";
import Github from "../../../Assets/Skills/github.png";

const Skills = () => {
  return (
    <>
      <section id="skills" className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-slider">
          <div className="skills-track">
            {/* 1st Set */}
            <div className="skill-card">
              <img src={Html} className="skill-icon" alt="HTML" />
              <h4>HTML</h4>
              <div className="level-label">95%</div>
            </div>
            <div className="skill-card">
              <img src={Css} className="skill-icon" alt="CSS" />
              <h4>CSS</h4>
              <div className="level-label">92%</div>
            </div>
            <div className="skill-card">
              <img src={JavaScript} className="skill-icon" alt="JavaScript" />
              <h4>JavaScript</h4>
              <div className="level-label">80%</div>
            </div>
            <div className="skill-card">
              <img src={Bootstrap} className="skill-icon" alt="Bootstrap" />
              <h4>Bootstrap</h4>
              <div className="level-label">90%</div>
            </div>
            <div className="skill-card">
              <img src={ReactImg} className="skill-icon" alt="React" />
              <h4>React</h4>
              <div className="level-label">78%</div>
            </div>
            <div className="skill-card">
              <img src={Figma} className="skill-icon" alt="Figma" />
              <h4>Figma</h4>
              <div className="level-label">60%</div>
            </div>
            <div className="skill-card">
              <img src={Java} className="skill-icon" alt="Java" />
              <h4>Java</h4>
              <div className="level-label">75%</div>
            </div>
            <div className="skill-card">
              <img src={NodeJs} className="skill-icon" alt="Node JS" />
              <h4>Node JS</h4>
              <div className="level-label">70%</div>
            </div>
            <div className="skill-card">
              <img src={Github} className="skill-icon" alt="GitHub" />
              <h4>GitHub</h4>
              <div className="level-label">70%</div>
            </div>

            {/* Duplicate set */}
            <div className="skill-card">
              <img src={Html} className="skill-icon" alt="HTML" />
              <h4>HTML</h4>
              <div className="level-label">95%</div>
            </div>
            <div className="skill-card">
              <img src={Css} className="skill-icon" alt="CSS" />
              <h4>CSS</h4>
              <div className="level-label">92%</div>
            </div>
            <div className="skill-card">
              <img src={JavaScript} className="skill-icon" alt="JavaScript" />
              <h4>JavaScript</h4>
              <div className="level-label">80%</div>
            </div>
            <div className="skill-card">
              <img src={Bootstrap} className="skill-icon" alt="Bootstrap" />
              <h4>Bootstrap</h4>
              <div className="level-label">90%</div>
            </div>
            <div className="skill-card">
              <img src={ReactImg} className="skill-icon" alt="React" />
              <h4>React</h4>
              <div className="level-label">78%</div>
            </div>
            <div className="skill-card">
              <img src={Figma} className="skill-icon" alt="Figma" />
              <h4>Figma</h4>
              <div className="level-label">60%</div>
            </div>
            <div className="skill-card">
              <img src={Java} className="skill-icon" alt="Java" />
              <h4>Java</h4>
              <div className="level-label">75%</div>
            </div>
            <div className="skill-card">
              <img src={NodeJs} className="skill-icon" alt="Node JS" />
              <h4>Node JS</h4>
              <div className="level-label">70%</div>
            </div>
            <div className="skill-card">
              <img src={Github} className="skill-icon" alt="GitHub" />
              <h4>GitHub</h4>
              <div className="level-label">70%</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
