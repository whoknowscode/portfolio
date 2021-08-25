import React from "react";
import { data } from "../data";

function Skills() {
  return (
    <React.Fragment>
      <section id="section" className="skills-container">
        <div className="container-fluid skills">
          <h2
            className="bold"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <span className="heading1 shadowEffect">
              <b style={{ position: "relative" }}>Here's My Skills</b>
            </span>{" "}
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
          </h2>
          <h3 className="heading2 mt-5" style={{ position: "relative" }}>
            I Build Complex Applications From Scratch{" "}
            <span className="semi-bold" style={{ color: "#5A57FF" }}>
              {" "}
              To ill Success{" "}
            </span>
          </h3>
          <p className="heading3">
            integrate services, optimize the code, make unique{" "}
            <span className="semi-bold">UI/UX</span> designs create API'S, Serve
            API's, Manage Databases <span className="semi-bold">(CRUD)</span>,
            create templates in{" "}
            <span className="semi-bold">Javascript Frameworks</span>, good
            collaboration in a team environment / good group communication,
          </p>
          <p>
            <b className="semi-bold">Constantly Learning</b> And Passion For{" "}
            <code className="p-1 text-white code">
              <span className="bold" style={{ color: "#66ff07" }}>
                {"</"}
              </span>
              Code
              <span className="bold" style={{ color: "#66ff07" }}>
                {">"}
              </span>
            </code>
          </p>
          <div className="skills-col">
            <div className="skill-col">
              <h3 className="heading2 mt-4">
                For{" "}
                <span className="semi-bold" style={{ color: "#5A57FF" }}>
                  Utilities
                </span>
              </h3>
              <div className="skills-list">
                <ul>
                  {data.skills.design.map((element, index) => {
                    if (element.icon.length > 0) {
                      return (
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            style={{ borderLeftColor: element.color }}
                            href={element.url}
                          >
                            <p>{element.name}</p>
                            <i
                              style={{ color: element.color }}
                              className={element.icon}
                            ></i>
                          </a>
                        </li>
                      );
                    }
                    return (
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          style={{ borderLeftColor: element.color }}
                          href={element.url}
                        >
                          <p>{element.name}</p>
                          <img
                            width="30px"
                            src={`assets/icons/${element.alt}`}
                            alt={element.name}
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="skill-col">
              <h3 className="heading2 mt-4">
                For{" "}
                <span className="semi-bold" style={{ color: "#5A57FF" }}>
                  Frontend
                </span>
              </h3>
              <div className="skills-list">
                <ul>
                  {data.skills.frontend.map((element, index) => {
                    if (element.icon.length > 0) {
                      return (
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            style={{ borderLeftColor: element.color }}
                            href={element.url}
                          >
                            <p>{element.name}</p>
                            <i
                              style={{ color: element.color }}
                              className={element.icon}
                            ></i>
                          </a>
                        </li>
                      );
                    }
                    return (
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          style={{ borderLeftColor: element.color }}
                          href={element.url}
                        >
                          <p>{element.name}</p>
                          <img
                            width="30px"
                            src={`assets/icons/${element.alt}`}
                            alt={element.name}
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="skill-col">
              <h3 className="heading2 mt-4">
                For{" "}
                <span className="semi-bold" style={{ color: "#5A57FF" }}>
                  Backend
                </span>
              </h3>
              <div className="skills-list">
                <ul>
                  {data.skills.backend.map((element, index) => {
                    if (element.icon.length > 0) {
                      return (
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            style={{ borderLeftColor: element.color }}
                            href={element.url}
                          >
                            <p>{element.name}</p>
                            <i
                              style={{ color: element.color }}
                              className={element.icon}
                            ></i>
                          </a>
                        </li>
                      );
                    }
                    return (
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          style={{ borderLeftColor: element.color }}
                          href={element.url}
                        >
                          <p>{element.name}</p>
                          <img
                            width="30px"
                            src={`assets/icons/${element.alt}`}
                            alt={element.name}
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Skills;
