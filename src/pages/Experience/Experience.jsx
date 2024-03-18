import React from "react";
import { Aside, Nav, Project } from "../../components/index";
import projects from "../../data/projects";
import "./experience.css";

const Experience = () => {
  return (
    <section className="experience">
      <Aside />
      <main>
        <Nav />
        <h1>Proyectos</h1>
        <article className="experience__projects">
          {projects.map((project, key) => (
            <Project
              key={key}
              title={project.name}
              url={project.url}
              img={project.img}
              descripcion={project.description}
            />
          ))}
        </article>
      </main>
    </section>
  );
};

export default Experience;
