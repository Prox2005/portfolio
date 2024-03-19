import React from "react";
import { FiGithub } from "react-icons/fi";
import "./project.css";

const Project = ({ img, title, url, descripcion, tech, repo }) => {
  return (
    <section className="project">
      <div className="project__data">
        <h3>{title}</h3>
        <p>{descripcion}</p>

        <section className="project__technologies">
          {tech &&
            tech.map((x, key) => (
              <img key={key} src={x} alt="techonología usada" height={"50px"} />
            ))}
        </section>
      </div>
      <div className="project__repo">
        <a href={url} target="_blank">
          <img
            src={img}
            alt="project image"
            height={"150px"}
            title="Visita la página dandole un click"
          />
        </a>
        <a href={repo} target="_blank">
          <FiGithub size={30} color="white" />
        </a>
      </div>
    </section>
  );
};

export default Project;
