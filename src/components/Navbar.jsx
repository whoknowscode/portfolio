import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar  py-3">
        <a className="navbar-brand bold text-light fs-1 " href="#">
          LuisPernia
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
        </a>
        <div className="navbar-custom">
          <li class="nav-item right ">
            <a class="btn btn-outline-light " href="#section">
              Skills
            </a>
          </li>
          <li class="nav-item right" style={{ marginLeft: "1rem" }}>
            <a class="btn btn-outline-light " href="#projects">
              Projects
            </a>
          </li>
          <button className="btn btn-primary">
            {" "}
            <a
              href="mailto: luispcode@gmail.com"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              {" "}
              Send Email
            </a>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
