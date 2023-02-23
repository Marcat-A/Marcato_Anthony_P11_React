import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import css from "./Dropdown.module.css";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Dropdown = (data) => {
  const [show, setShow] = useState(false);
  return (
    <ul className={css.dropdown}>
      <button
        className={css.title}
        onClick={() => {
          show ? setShow(false) : setShow(true);
        }}
      >
        {data.title}
        {show ? (
          <FontAwesomeIcon icon={faAngleUp} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faAngleUp} size="2x" rotation={180} />
        )}
      </button>
      <div className={show ? `${css.desc} ${css.show}` : `${css.desc}`}>
        {data.desc.map((obj) => {
          return <li key={obj}>{obj}</li>;
        })}
      </div>
    </ul>
  );
};

export default Dropdown;
