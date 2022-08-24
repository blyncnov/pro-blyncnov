import React from "react";

// Components
import Navigation from "./Navigation";
import Hero from "../components/Hero";

// SASS Module Styling
import classes from "../styles/layouts/Header.module.scss";

const Header = () => {
  return (
    <section id="Header">
      <div className={classes.container}>
        <div className="Index__Layout">
          <Navigation />
          <Hero />
        </div>
      </div>
    </section>
  );
};

export default Header;
