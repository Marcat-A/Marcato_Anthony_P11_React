import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import css from "./globals.module.css";
import App from "./App";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div className={css.container}>
        <Navbar />
        <App />
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
);
