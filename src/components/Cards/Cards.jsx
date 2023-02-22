import React from "react";
import css from "./Cards.module.css";
import data from "../../assets/data/data.json";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className={css.container}>
      {data.map((logement) => {
        return (
          <Link to={`/logements/${logement.id}`} key={logement.id}>
            <Card logement={logement} />
          </Link>
        );
      })}
    </div>
  );
};

export default Cards;
