import React from "react";
import css from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={css.container}>
      <div className={css.brand}>
        <img src={logo} alt="Logo de Kasa" />
      </div>
      <ul className={css.links}>
        <li className={css.link}>
          <Link to="/">Accueil</Link>
        </li>
        <li className={css.link}>
          <Link to="/about">A Propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
