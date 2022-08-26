import React from "react";
import Link from "next/link";

import Layout from "../styles/layouts/Index.module.scss";
import classes from "../styles/Contact.module.scss";

// import { SiNextdotjs, SiTypescript } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact">
      <br />
      <div>
        <div className={Layout.layout}>
          <div className={classes.contact__container}>
            <h2>Get In Touch</h2>
            <p>
              I’m looking for any new opportunities, my inbox is always open.
              Interested in working together ? or just want to talk ? I’ll buy
              the coffee.
            </p>
            <Link href="mailto:bholuwatife00@gmail.com">
              <a>
                <button>Lets do this</button>
              </a>
            </Link>
            <br />
            <br />
            <div>
              <h5>Designed & Built by Taiwo Boluwatife</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
