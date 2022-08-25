import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
// import hoverEffect from "hover-effect";

import Layout from "../styles/layouts/Index.module.scss";
import classes from "../styles/Hero.module.scss";

import HeroImageShowcase from "../public/brand/man5.png";

import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { FaReact, FaDocker, FaFigma } from "react-icons/fa";
import { SiNodedotjs, SiTypescript } from "react-icons/si";

const ImageAminateContinous = {
  move: {
    y: [0, -10, 0, 10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
    },
  },
};

const spring = {
  type: "spring",
  damping: 10,
  stiffness: 1000,
};

const Hero = () => {
  return (
    <section id="hero">
      <div className={Layout.layout}>
        <div className={classes.Hero__container}>
          <div className={classes.Hero__Column}>
            <div className={classes.Hero__Text}>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ stiffness: 1000, type: "spring" }}
              >
                Get The Best Design Experience From Me.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ stiffness: 100, type: "spring" }}
              >
                I&apos;m a <span>Frontend Developer</span> specializing in
                building cool UIs and great <span>User Experience</span>{" "}
                interfaces. Welcome to my dom <br />
                <span> [“hip”, “hip”] — (hip hip array!)</span> 🎉🎉🎉
              </motion.p>
              <div className={classes.Hero__Button}>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", duration: 2, delay: 0.1 }}
                >
                  <Link href="mailto:bholuwatife00@gmail.com">
                    <a>HIRE ME</a>
                  </Link>
                </motion.button>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", duration: 5, delay: 0.3 }}
                >
                  <Link href="#projects">
                    <a>SEE MY WORK</a>
                  </Link>
                </motion.button>
              </div>
            </div>
          </div>
          <div className={classes.Hero__Column}>
            <div className={classes.Hero__Image__Control}>
              <Image src={HeroImageShowcase} alt="Hero-section-image" />
              <div className={classes.Hero__Float__Data}>
                <motion.div
                  initial={{ y: 0 }}
                  variants={ImageAminateContinous}
                  animate="move"
                  transition={spring}
                >
                  <SiNodedotjs style={{ fontSize: "3em" }} />
                </motion.div>
                <motion.div>
                  <TbBrandJavascript style={{ fontSize: "3em" }} />
                </motion.div>
                <motion.div
                  initial={{ y: 0 }}
                  variants={ImageAminateContinous}
                  animate="move"
                  transition={spring}
                >
                  <FaReact style={{ fontSize: "3em" }} />
                </motion.div>
                <motion.div
                  initial={{ y: 0 }}
                  variants={ImageAminateContinous}
                  animate="move"
                  transition={spring}
                >
                  <SiTypescript style={{ fontSize: "3em" }} />
                </motion.div>
                <motion.div>
                  <FaDocker style={{ fontSize: "3em" }} />
                </motion.div>
                <motion.div>
                  <FaFigma style={{ fontSize: "3em" }} />
                </motion.div>
                <motion.div
                  initial={{ y: 0 }}
                  variants={ImageAminateContinous}
                  animate="move"
                  transition={spring}
                >
                  <TbBrandNextjs style={{ fontSize: "3em" }} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
