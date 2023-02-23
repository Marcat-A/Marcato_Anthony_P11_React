import React from "react";
import css from "./Footer.module.css";
import logo from "../../assets/logoFooter.png";

const Footer = () => {
  return (
    <footer className={css.container}>
      <img src={logo} alt="Nom de l'entreprise" className={css.logo} />
      <p className={css.text}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
