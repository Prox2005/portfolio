import React from "react";
import "./project.css";

const Project = ({ img, title, url, descripcion }) => {
  return (
    <section className="project">
      <div className="project__data">
        <h3>{title}</h3>
        <p>{descripcion}</p>
      </div>
      <a href={url} target="_blank">
        <img
          src={img}
          alt="project image"
          height={"150px"}
          title="Visita la página dandole un click"
        />
      </a>
    </section>
  );
};

export default Project;
