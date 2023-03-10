import React, { useState } from "react";
import css from "./Slider.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Slider = ({ images }) => {
  const [imgNum, setImgNum] = useState(0);
  const nextImg = () => {
    if (imgNum >= images.length - 1) {
      setImgNum(0);
    } else {
      setImgNum(imgNum + 1);
    }
  };
  const prevImg = () => {
    if (imgNum === 0) {
      setImgNum(images.length - 1);
    } else {
      setImgNum(imgNum - 1);
    }
  };
  return (
    <>
      {images.length > 1 ? (
        <>
          <button onClick={() => prevImg()}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className={`${css.arrow} ${css.arrowLeft}`}
            />
          </button>
          <button onClick={() => nextImg()}>
            <FontAwesomeIcon
              icon={faChevronRight}
              className={`${css.arrow} ${css.arrowRight}`}
            />
          </button>
          <p className={css.nume}>
            {imgNum + 1} / {images.length}
          </p>
        </>
      ) : (
        ""
      )}
      <img src={images[imgNum]} className={css.img} alt="Chambre" />
    </>
  );
};

export default Slider;
