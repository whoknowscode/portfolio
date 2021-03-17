import React, { useState, useEffect, useRef } from "react";
import { data } from "../data";
function Projects() {
  return (
    <React.Fragment>
      <section
        style={{ height: "100%" }}
        className="mt-4 projects-animation py-2"
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            minHeight: "max-content",
            width: "100%",
          }}
          id="particles-js"
        ></div>
        <div className="container-fluid">
          <h1
            style={{ display: "flex", flexDirection: "column" }}
            className="p-0 mb-5 mt-3 heading1 bold text-white"
          >
            My Projects
            <svg
              width="134"
              height="24"
              viewBox="0 0 134 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.103516"
                y1="1.72211"
                x2="133.218"
                y2="1.72211"
                stroke="#5A57FF"
                strokeWidth="3"
              />
              <line
                x1="0.103516"
                y1="11.8376"
                x2="93.6035"
                y2="11.8376"
                stroke="#5A57FF"
                strokeOpacity="0.41"
                strokeWidth="3"
              />
              <line
                x1="0.103516"
                y1="21.953"
                x2="66.6608"
                y2="21.953"
                stroke="#5A57FF"
                strokeOpacity="0.12"
                strokeWidth="3"
              />
            </svg>
          </h1>

          <div className="projects">
            {data.projects.map((project, index) => {
              return (
                <article className="project card">
                  <div className="before-card">
                    <div className="block"></div>
                    <div
                      style={{ backgroundColor: project.color }}
                      className="text p-1"
                    >
                      <h2 className="heading2 m-0 text-white bold ">
                        {project.type}{" "}
                        <span className="opacity">{project.Language}</span>
                      </h2>
                    </div>
                  </div>
                  <img
                    src={`assets/projects/${project.img}`}
                    class="card-img-top"
                    alt={project.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title semi-bold">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                    <a
                      href="#"
                      style={{ marginRight: "20px" }}
                      className="btn btn-outline-primary"
                    >
                      <i class="bi bi-github"></i> Github
                    </a>
                    <a href={project.url} className="btn btn-outline-primary">
                      {project.icon ? (
                        <i
                          style={{ fontSize: "16px" }}
                          className={project.icon}
                        ></i>
                      ) : (
                        <img
                          width="20px"
                          src={`assets/icons/${project.alt.icon}`}
                          alt="..."
                        />
                      )}{" "}
                      Online
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Projects;
