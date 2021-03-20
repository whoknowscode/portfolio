import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <footer>
        <div style={{ color: "white" }} className="contact">
          <div className="icons container-fluid">
            <div>
              {" "}
              <a href="#">
                {" "}
                <i class="fab fa-facebook fs-4 text-white mx-3 "></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter fs-4 text-white mx-3"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in fs-4 text-white mx-3"></i>
              </a>
              <a href="#">
                <i class="fab fa-github fs-4 text-white mx-3"></i>
              </a>
            </div>
            <p className="m-0 heading3 bold">
              Email:{" "}
              <a
                href="mailto: luispcode@gmail.com"
                style={{ color: "white", fontWeight: "400" }}
              >
                luispcode@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="rights p-1">
          <p className="text-white">
            All The Rights Reserved To{" "}
            <b>
              LuisPernia&copy;
              <svg
                width="100"
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
            </b>
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
