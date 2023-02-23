import React from "react";
import { useParams } from "react-router-dom";
import data from "../../assets/data/data.json";
import Slider from "../../components/Slider/Slider";
import css from "./Logement.module.css";
import greyStar from "../../assets/greyStar.svg";
import coloredStar from "../../assets/coloredStar.svg";

const Logement = () => {
  const { id } = useParams();
  const logement = data.find((logement) => logement.id === id);
  const firstName = logement.host.name.split(" ", 2)[0];
  const lastName = logement.host.name.split(" ", 2)[1];
  const coloredStars = [];
  const greyStars = [];
  for (let i = 0; i < logement.rating; i++) {
    coloredStars.push(<img src={coloredStar} alt="/" />);
  }
  for (let i = logement.rating; i < 5; i++) {
    greyStars.push(<img src={greyStar} alt="/" />);
  }
  return (
    <main className={css.hero}>
      <div className={css.carrousel}>
        {logement.pictures.length > 1 ? (
          <Slider images={logement.pictures} />
        ) : (
          <img src={logement.pictures[0]} alt="Chambre" />
        )}
      </div>
      <div className={css.header}>
        <div className={css.leftHeader}>
          <h2 className={css.title}>{logement.title}</h2>
          <h3 className={css.secondTitle}>{logement.location}</h3>
          <div className={css.tags}>
            {logement.tags.map((tag) => {
              return <span className={css.tag}>{tag}</span>;
            })}
          </div>
        </div>
        <div className={css.rightHeader}>
          <div className={css.profile}>
            <div className={css.names}>
              <span className={css.firstName}>{firstName}</span>
              <span className={css.lastName}>{lastName}</span>
            </div>
            <div className={css.picture}>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
          </div>
          <div className={css.ratings}>
            {coloredStars}
            {greyStars}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Logement;
