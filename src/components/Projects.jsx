import React from "react";
function Projects() {
  return (
    <React.Fragment>
      <section
        id="projects"
        style={{ height: "100%" }}
        className="projects-animation pt-2"
      >
        <div className="container-fluid">
          <h1
            style={{ display: "flex", flexDirection: "column" }}
            className="p-0 mb-4 mt-3 heading1 bold text-white"
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
        </div>
        <div className="projects">
          <div className="project">
            <div className="pigeon-body">
              <div className="pigeon-title">
                <h1><span>Pigeon</span> Messenger</h1>
                <p className="pigeon-small">Realtime web chat application</p>
              </div>
              <div className="pigeon-opts">
                <p><i className="bi bi-diamond-fill"></i> Features</p>
                <div className="pigeon-icons">
                  <div className="icon-group">
                      <p><i className="bi bi-cloud-upload-fill"></i> Upload Images</p>
                      <p><i className="bi bi-person-plus-fill"></i> Add Contacts</p>
                      <p><i className="bi bi-layout-wtf"></i> State management</p>
                  </div>
                  <div className="icon-group">
                      <p><i className="bi bi-collection-fill"></i> Create Rooms</p>
                      <p><i className="bi bi-bell-fill"></i> In-app notifications</p>
                      <p><i className="bi bi-google"></i> Google Authentication</p>
                  </div>
                </div>
                <div className="pigeon-buttons">
                  <a target="_blank" rel="noreferrer" className="pigeon-button" href="https://pigeon-messenger.netlify.app/register"><i className="bi bi-broadcast-pin"></i> Web</a>
                  <a target="_blank" rel="noreferrer" className="pigeon-button" href="https://github.com/whoknowscode/pigeon-messenger"><i className="bi bi-github"></i> Code</a>
                </div>
              </div>
            </div>
            <div className="displays">
                <div className="mobile">
                    <img src="/assets/projects/mobiles.gif" alt="" />
                </div>
                <div className="desktop">
                <img src="/assets/projects/desktops.gif" alt="" />
                </div>
            </div>
          </div>
        </div>

      </section>
    </React.Fragment>
  );
}

export default Projects;
