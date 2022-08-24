import React from "react";

import Layout from "../styles/layouts/Index.module.scss";
import classes from "../styles/Brands.module.scss";

import { SiNextdotjs, SiTypescript } from "react-icons/si";

const Brands = () => {
  return (
    <section id="brands">
      <br />
      <div>
        <div className={Layout.layout}>
          <div>
            <h3>Work For All This Brand & Client</h3>
          </div>
          <div id={classes.brand__row}>
            <SiTypescript style={{ fontSize: "2em" }} />
            <SiNextdotjs style={{ fontSize: "2em" }} />
            <SiTypescript style={{ fontSize: "2em" }} />
            <SiNextdotjs style={{ fontSize: "2em" }} />
            <SiTypescript style={{ fontSize: "2em" }} />
            <SiNextdotjs style={{ fontSize: "2em" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
