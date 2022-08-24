import React from "react";
import Image from "next/image";

import Layout from "../styles/layouts/Index.module.scss";
import classes from "../styles/Services.module.scss";

import {
  SiShowpad,
  SiInstagram,
  SiGithub,
  SiTwitter,
  SiFacebook,
  SiLinkedin,
} from "react-icons/si";

import ImageOne from "../public/icon/net.png";
import ImageTwo from "../public/icon/main.svg";

import Skills from "../data/Info";

const Services = () => {
  return (
    <section id="services" className={classes.services__ID}>
      <br />
      <br />
      <div className={Layout.layout}>
        <div>
          <div className={classes.services__row}>
            <div className={classes.services__row__Column}>
              <div className={classes.services__row__Column__Text}>
                <h1>
                  A Little About <span>Myself.</span>
                </h1>
                <br />
                <p>
                  Hi There! My name is
                  <span className={classes.emphasis}> Taiwo Boluwatife </span>
                  and I enjoy creating things that live on the internet. My
                  interest in Web development started back in 2017 when I
                  decided to try editing custom Wapka and site123 websites —
                  turns out that taught me a lot about XML & HTML & CSS! Date,
                  <span className={classes.emphasis}>
                    {" "}
                    I&apos;ve gained a lot of knowledge{" "}
                  </span>
                  and have worked on many projects.
                  <br />
                  <br />
                  My main
                  <span className={classes.emphasis}> focus </span> these days
                  is building accessible, awesome, and
                  <span className={classes.emphasis}>
                    {" "}
                    productive designs{" "}
                  </span>{" "}
                  I also recently transitioned into blockchain development and
                  built a new project using Ethers js & Next js.
                </p>
                <br />
                <h3>Connect with me on my social media</h3>
                <div className={classes.services__Social__Medium}>
                  <div>
                    <SiLinkedin />
                    <a href="https://www.linkedin.com/in/blyncnov">Linkedln</a>
                  </div>
                  <div>
                    <SiTwitter />
                    <a href="https://twitter.com/jeremytechie">Twitter</a>
                  </div>
                  <div>
                    <SiGithub />
                    <a href="https://github.com/blyncnov">Github</a>
                  </div>

                  <div>
                    <SiInstagram />
                    <a href="https://www.instagram.com/jeremytechie/?hl=en">
                      Instagram
                    </a>
                  </div>
                  <div>
                    <SiFacebook />
                    <a href="https://medium.com/@taiwoboluwatife">Facebook</a>
                  </div>
                </div>

                <br />
                <div className="group__button">
                  <button>DOWNLOAD CV</button>
                </div>
              </div>
            </div>
            <div className={classes.services__row__Column}>
              <div className={classes.services__Inner__Column}>
                <div className={classes.services__Inner__Column__Box}>
                  <div className={classes.services__Inner__Cloud}>
                    <div>
                      <Image src={ImageOne} alt="image" />
                    </div>
                    <div>
                      <h4>Web Development</h4>
                      <p>
                        Corporate websites that build trust. E-Commerce and
                        marketing websites that drive sales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.services__Inner__Column}>
                <div className={classes.services__Inner__Column__Box}>
                  <div className={classes.services__Inner__Cloud}>
                    <div>
                      <Image src={ImageTwo} alt="image" />
                    </div>
                    <div>
                      <h4>UX Designs</h4>
                      <p>
                        I value simple content structure, clean design patterns,
                        and thoughtful interactions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.services__Inner__Column}>
                <div className={classes.services__Skills}>
                  <h3>
                    Here are a few technologies I’ve been working with recently
                  </h3>
                  <br />
                  <div className={classes.services__Skill__Grid}>
                    {Skills.map((skill) => {
                      return (
                        <div key={skill.id}>
                          <SiShowpad style={{ color: "#ccd6f6" }} />
                          <h4> {skill.title} </h4>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
      <br />
      <br />
    </section>
  );
};

export default Services;
