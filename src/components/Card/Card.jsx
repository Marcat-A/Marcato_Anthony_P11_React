import React from "react";
import css from "./Card.module.css";

const Card = ({ logement }) => {
  return <div>{logement.title}</div>;
};

export default Card;
