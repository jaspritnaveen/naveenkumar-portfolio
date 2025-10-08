import React from "react";
import "./Project.css";

// Import your project images
import business from "../../../Assets/Projects/business.png";
import milk from "../../../Assets/Projects/milkymist.png";
import travel from "../../../Assets/Projects/villa.png";
import form from "../../../Assets/Projects/form.png";
import portfolio from "../../../Assets/Projects/portfolio.png";
import mexantImg from "../../../Assets/Projects/mexant.png";

const projects = [
  {
    title: "Corporate & Business Site",
    image: business,
    description:
      "Built a polished, responsive business site template with modular components for a consistent user experience.",
    tags: ["HTML", "CSS", "Bootstrap"],
    liveLink: "#",
    githubLink: "https://github.com/jaspritnaveen/Business-Website",
  },
  {
    title: "Dairy Products Website",
    image: milk,
    description:
      "Built a structured, fully responsive website to showcase dairy products with a clean and user-friendly design.",
    tags: ["HTML", "CSS"],
    liveLink: "#",
    githubLink: "https://github.com/jaspritnaveen/Milky-Mist",
  },
  {
    title: "Travel Agency Website",
    image: travel,
    description:
      "Designed and implemented a responsive travel agency website with clean layouts to highlight packages and services.",
    tags: ["HTML", "CSS", "Bootstrap"],
    liveLink: "#",
    githubLink: "https://github.com/jaspritnaveen/Villa-Agency",
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "Built a React.js portfolio with reusable components and a responsive design to showcase projects, skills, and achievements.",
    tags: ["HTML", "CSS", "Bootstrap", "React Js"],
    liveLink: "#",
    githubLink: "https://github.com/jaspritnaveen/naveenkumar-portfolio",
  },
  {
    title: "Form Validation Project",
    image: form,
    description:
      "Developed a form validation system using HTML, CSS, and JavaScript to ensure accurate and user-friendly input handling.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://learnhub-dc69d.web.app",
    githubLink: "https://github.com/jaspritnaveen/3D-CoverFlow-",
  },
  {
    title: "Responsive Business Website",
    image: mexantImg,
    description:
      "Developed a fully responsive multi-page website with modern layouts and custom content, optimized for mobile devices.",
    tags: ["HTML", "CSS", "Bootstrap", "React JS"],
    liveLink: "https://github.com/jaspritnaveen/Mexant-website",
    githubLink: "https://github.com/jaspritnaveen/Mexant-website",
  },
];

const Project = () => {
  return (
    <section id="projects" className="p-3">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2>My Projects</h2>
          <p>
            Here are some of the projects I've worked on during my academic
            journey
          </p>
        </div>

        <div className="px-4 row g-4 gy-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4 p-0 p-md-4">
              <article className="project-card card border-0 h-100 shadow-sm">
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top"
                  />
                </div>
                <div className="project-info card-body">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-text">{project.description}</p>
                  <div className="project-tags mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="badge tag me-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-links d-flex justify-content-between">
                    <a
                      href={project.liveLink}
                      className="live-link-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-link" aria-hidden="true"></i>
                      <span>Open</span>
                    </a>
                    <a
                      href={project.githubLink}
                      className="github-link-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github" aria-hidden="true"></i>
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
