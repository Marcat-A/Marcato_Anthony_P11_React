import React from "react";
import { useParams } from "react-router-dom";
import data from "../../assets/data/data.json";
import Slider from "../../components/Slider/Slider";
import css from "./Logement.module.css";
import greyStar from "../../assets/greyStar.svg";
import coloredStar from "../../assets/coloredStar.svg";
import Dropdown from "../../components/Dropdown/Dropdown";

const Logement = () => {
  const { id } = useParams();
  const logement = data.find((logement) => logement.id === id);
  const firstName = logement.host.name.split(" ", 2)[0];
  const lastName = logement.host.name.split(" ", 2)[1];
  const coloredStars = [];
  const greyStars = [];
  for (let i = 0; i < logement.rating; i++) {
    coloredStars.push(<img src={coloredStar} alt="/" key={i} />);
  }
  for (let i = logement.rating; i < 5; i++) {
    greyStars.push(<img src={greyStar} alt="/" key={i} />);
  }
  const equips = logement.equipments.map((equipement) => equipement);
  return (
    <main className={css.hero}>
      <section className={css.carrousel}>
        {logement.pictures.length > 1 ? (
          <Slider images={logement.pictures} />
        ) : (
          <img src={logement.pictures[0]} alt="Chambre" />
        )}
      </section>
      <section className={css.header}>
        <div className={css.leftHeader}>
          <h2 className={css.title}>{logement.title}</h2>
          <h3 className={css.secondTitle}>{logement.location}</h3>
          <div className={css.tags}>
            {logement.tags.map((tag, i) => {
              return (
                <span className={css.tag} key={i}>
                  {tag}
                </span>
              );
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
      </section>
      <section className={css.dropdowns}>
        <Dropdown title="Description" desc={[logement.description]} />
        <Dropdown title="Équipements" desc={equips} />
      </section>
    </main>
  );
};

export default Logement;
