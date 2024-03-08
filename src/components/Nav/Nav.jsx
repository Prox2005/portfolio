import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <ol>
        <li>
          <Link to={"/"}>Acerca de</Link>
        </li>
        <li>
          <Link to={"/experiencia"}>Experiencia</Link>
        </li>
        <li>
          <Link to={"/contactos"}>Contacto</Link>
        </li>
      </ol>
    </nav>
  );
};

export default Nav;
