import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./aside.css";

const Aside = () => {
  return (
    <aside>
      <Link to={"/"}>
        <FaCode size={26} color="white" />
      </Link>
      <div>
        <a href={"https://github.com/Prox2005?tab=repositories"} target="_blank">
          <FiGithub size={26} color="white" />
        </a>
        <div className="line"></div>
      </div>
    </aside>
  );
};

export default Aside;
