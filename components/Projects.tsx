import React from "react";
import Link from "next/link";
import Image from "next/image";

import Layout from "../styles/layouts/Index.module.scss";
import classes from "../styles/Projects.module.scss";

import { SiGithub } from "react-icons/si";
import { BsLink } from "react-icons/bs";

import myProjects from "../data/Projects";

const style = { fontSize: "1.3em" };

const Projects = () => {
  return (
    <div id="projects" className={classes.projects}>
      <section className={classes.services}>
        <div className={Layout.layout}>
          <div className={classes.Projects__Container}>
            <h1>
              Some Things i&apos;ve <span>Built.</span>
            </h1>
            <br />
            <div className={classes.Projects__Container__Grid__Section}>
              {myProjects.map((project) => {
                return (
                  <div
                    className={classes.Projects__Container__Grid}
                    key={project.id}
                  >
                    <div>
                      <h2>
                        {project.ProjectName}
                        <span>
                          <Link href={`${project.ProjectUrl}`} target="_blank">
                            <a>
                              <BsLink style={style} />
                            </a>
                          </Link>
                        </span>
                      </h2>
                      <div
                        className={classes.Projects__Container__Grid__InnerText}
                      >
                        <p>{project.ProjectDescription}</p>
                      </div>
                      <ul className={classes.Projects__Container__Tech__Grid}>
                        {project.ProjectTechUsed.map((tech, index) => {
                          return <li key={index}>{tech}</li>;
                        })}
                      </ul>
                      <br />
                      <div className={classes.Projects__Container__Demo}>
                        <h3>
                          <Link href={`${project.GithubUrl}`}>
                            <a>
                              <SiGithub style={style} />
                            </a>
                          </Link>
                        </h3>
                        <h3>
                          <Link href={`${project.ProjectUrl}`}>
                            <a>
                              <BsLink style={style} />
                            </a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <div
                      className={
                        project.reverseX
                          ? [classes.vh].join(" ")
                          : classes.Reverse
                      }
                    >
                      <div
                        className={
                          classes.Projects__Container__Grid__InnerImage
                        }
                      >
                        <Image src={project.ProjectImage} alt="image" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
