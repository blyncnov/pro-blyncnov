import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

// Navigation Data
import { PicturedLogo, Logo, NavigationData } from "../data/Nav-data";

// SASS Module Styling
import Layout from "../styles/layouts/Index.module.scss";
import classes from "../styles/layouts/Navigation.module.scss";

// Icon Styles
const IconStyle = {
  fontSize: "1.2em",
};

const Navigation = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  // Click Handler Function
  const isClickedHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <section id="Navigation">
      <div className={classes.Navigation__Container}>
        <div className={Layout.layout}>
          <div className={classes.Navigation__Column}>
            <div className={classes.Navigation__Logo}>
              <h1> {Logo} </h1>
              {/* <Image src={PicturedLogo} alt="logo" /> */}
            </div>
            <div
              onClick={isClickedHandler}
              className={
                isClicked
                  ? [classes.Navigation__List, classes.active].join(" ")
                  : classes.Navigation__List
              }
            >
              <ul>
                {NavigationData.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link href={`/${item.url}`} target="_blank">
                        <a>
                          <h4 onClick={isClickedHandler}>
                            <span>{`0${item.id}`}.</span>
                            {`${item.name}`}
                          </h4>
                        </a>
                      </Link>
                    </li>
                  );
                })}
                <button>
                  <Link href="https://drive.google.com/file/d/1g1VqGMLwJDPR1MssmKQeLm9WxTBxvTR1/view?usp=sharing">
                    <a> Download Resume</a>
                  </Link>
                </button>
              </ul>
            </div>
            <div
              className={classes.Navigation__Mobile}
              onClick={isClickedHandler}
            >
              <div>
                {isClicked ? (
                  <FaTimes style={IconStyle} />
                ) : (
                  <FaBars style={IconStyle} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
