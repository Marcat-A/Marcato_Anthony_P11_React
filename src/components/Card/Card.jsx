import React from "react";
import css from "./Card.module.css";

const Card = ({ logement }) => {
  return (
    <div
      className={css.container}
      style={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%),url(${logement.cover})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h2 className={css.title}>{logement.title}</h2>
    </div>
  );
};

export default Card;
