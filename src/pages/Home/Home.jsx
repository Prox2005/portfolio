import React from "react";
import { Aside, Nav } from "../../components";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <Aside />
      <main className="main">
        <Nav />
        <header>
          <span>Hola, mi nombre es</span>
          <div>
            <h1>Renato Probst.</h1>
            <span>Apasionado por la programación</span>
          </div>
          <p>Desarrollador web front end, con ganas de seguir formandome día a día. </p>
          <Link to={"/contacto"}>Contáctame</Link>
        </header>
      </main>
    </section>
  );
};

export default Home;
