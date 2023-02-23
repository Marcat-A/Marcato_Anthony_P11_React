import React from "react";
import css from "./NotFound.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>404</h1>
      <h2 className={css.secondTitle}>
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/" className={css.link}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default NotFound;
