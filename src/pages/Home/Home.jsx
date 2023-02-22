import React from "react";
import Cards from "../../components/Cards/Cards";
import css from "./Home.module.css";

const Home = () => {
  return (
    <main className={css.hero}>
      <div className={css.title}>
        <h1 className={css.mainTitle}>Chez vous, partout et ailleurs</h1>
      </div>
      <Cards />
    </main>
  );
};

export default Home;
