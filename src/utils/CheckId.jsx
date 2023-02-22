import React from "react";
import { Outlet, Navigate, useParams } from "react-router-dom";
import data from "../assets/data/data.json";

const CheckId = () => {
  let idExiste = false;
  let { id } = useParams();
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      idExiste = true;
      break;
    }
  }
  return idExiste ? <Outlet /> : <Navigate to="*" />;
};

export default CheckId;
