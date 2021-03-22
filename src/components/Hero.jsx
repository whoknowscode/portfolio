import React from "react";
import Navbar from "./Navbar";

function Hero() {
  return (
    <React.Fragment>
      <section className="hero">
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
          <Navbar />
        </div>
        <div
          className="row m-0"
          style={{ display: "flex", alignItems: "center", marginTop: "30px" }}
        >
          <div className="hero-box col-md-6 p-0">
            <div
              className="py-5 container-fluid"
              style={{ position: "relative" }}
            >
              <h1 className="heading1 text-light bold mb-0">
                <span className="back">
                  <b style={{ position: "relative" }}>Amazing</b>
                </span>{" "}
                Experiences With High Perfomance
              </h1>
              <h3 className="heading2 text-light regular mt-4">
                <span className="bold">Web Developer</span> Junior
              </h3>
              <p className="heading3 opacity-dark mt-4">
                Database <span className="semi-bold text-light">\</span>{" "}
                Frontend <span className="semi-bold text-light">\</span>
                Backend <span className="semi-bold text-light">\</span>{" "}
                Authentication <span className="semi-bold text-light">\</span>{" "}
                UI/UX
              </p>
              <button className="btn btn-md btn-outline-primary mt-4 ">
                <a
                  className="text-white fw-bold"
                  style={{ textDecoration: "none" }}
                  href="#projects"
                >
                  See My Work
                </a>
              </button>
            </div>
          </div>
          <div className="col-md-6 icons">
            <div>
              <svg
                width="100"
                height="100"
                viewBox="0 0 131 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M94.5531 10.074H36.3065C32.8817 10.074 30.0953 12.8447 30.0953 16.2504V73.8975C30.0953 77.3032 32.8817 80.074 36.3065 80.074H94.5531C97.978 80.074 100.764 77.3032 100.764 73.8975V16.2504C100.764 12.8447 97.978 10.074 94.5531 10.074ZM36.3065 14.1916H94.5531C95.6947 14.1916 96.6235 15.1152 96.6235 16.2504V26.5446H34.2361V16.2504C34.2361 15.1152 35.1649 14.1916 36.3065 14.1916ZM94.5531 75.9563H36.3065C35.1649 75.9563 34.2361 75.0327 34.2361 73.8975V30.6622H96.6235V73.8975C96.6235 75.0327 95.6947 75.9563 94.5531 75.9563Z"
                  fill="url(#paint0_linear)"
                />
                <g filter="url(#filter0_d)">
                  <path
                    d="M72.4566 37.0052C71.4057 36.5573 70.1884 37.0414 69.738 38.0865L57.3157 66.9099C56.8652 67.955 57.3522 69.1654 58.4031 69.6133C59.4544 70.0613 60.6714 69.5768 61.1217 68.532L73.5439 39.7085C73.9945 38.6633 73.5075 37.453 72.4566 37.0052Z"
                    fill="#DBFF4D"
                  />
                </g>
                <g filter="url(#filter1_d)">
                  <path
                    d="M54.6242 43.7877C53.9098 42.8998 52.6067 42.756 51.7142 43.4663L41.3624 51.7016C40.3273 52.5247 40.3266 54.0931 41.3624 54.9169L51.7142 63.1522C52.6071 63.8627 53.9102 63.7185 54.6242 62.8308C55.3385 61.9429 55.1939 60.6472 54.3008 59.937L45.9699 53.3092L54.3008 46.6816C55.1939 45.9713 55.3385 44.6758 54.6242 43.7877Z"
                    fill="#DBFF4D"
                  />
                </g>
                <g filter="url(#filter2_d)">
                  <path
                    d="M89.4973 51.7016L79.1454 43.4663C78.2525 42.7558 76.9495 42.8998 76.2354 43.7877C75.5211 44.6756 75.6658 45.9713 76.5588 46.6815L84.8897 53.3093L76.5588 59.9369C75.6658 60.6472 75.5211 61.9428 76.2354 62.8307C76.9506 63.7195 78.2537 63.8617 79.1454 63.1521L89.4973 54.9168C90.5324 54.0937 90.5331 52.5254 89.4973 51.7016Z"
                    fill="#DBFF4D"
                  />
                </g>
                <path
                  d="M40.5853 22.4269C41.7287 22.4269 42.6556 21.5052 42.6556 20.3681C42.6556 19.2311 41.7287 18.3093 40.5853 18.3093C39.4418 18.3093 38.5149 19.2311 38.5149 20.3681C38.5149 21.5052 39.4418 22.4269 40.5853 22.4269Z"
                  fill="#FF577F"
                />
                <path
                  d="M48.8668 22.4269C50.0102 22.4269 50.9371 21.5052 50.9371 20.3681C50.9371 19.2311 50.0102 18.3093 48.8668 18.3093C47.7233 18.3093 46.7964 19.2311 46.7964 20.3681C46.7964 21.5052 47.7233 22.4269 48.8668 22.4269Z"
                  fill="#FF577F"
                  fill-opacity="0.85"
                />
                <path
                  d="M57.1483 22.4269C58.2918 22.4269 59.2187 21.5052 59.2187 20.3681C59.2187 19.2311 58.2918 18.3093 57.1483 18.3093C56.0049 18.3093 55.0779 19.2311 55.0779 20.3681C55.0779 21.5052 56.0049 22.4269 57.1483 22.4269Z"
                  fill="#FF577F"
                  fill-opacity="0.65"
                />
                <path
                  d="M77.8521 22.4269H90.2744C91.4178 22.4269 92.3448 21.5051 92.3448 20.3681C92.3448 19.2311 91.4178 18.3093 90.2744 18.3093H77.8521C76.7087 18.3093 75.7817 19.2311 75.7817 20.3681C75.7817 21.5051 76.7087 22.4269 77.8521 22.4269Z"
                  fill="#5A57FF"
                />
                <defs>
                  <filter
                    id="filter0_d"
                    x="17.1478"
                    y="0.838196"
                    width="96.5641"
                    height="112.942"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="20" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d"
                    x="0.585815"
                    y="7.01501"
                    width="94.4922"
                    height="100.588"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="20" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d"
                    x="35.7816"
                    y="7.01495"
                    width="94.4922"
                    height="100.588"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="20" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear"
                    x1="25.9241"
                    y1="12.0237"
                    x2="104.363"
                    y2="84.3734"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#5A57FF" />
                    <stop offset="1" stop-color="#5A57FF" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="first"
                width="200"
                height="200"
                viewBox="0 0 289 289"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M126.265 288.416C122.953 288.416 120.265 285.728 120.265 282.416V234.416C120.265 231.104 122.953 228.416 126.265 228.416C129.577 228.416 132.265 231.104 132.265 234.416V282.416C132.265 285.728 129.577 288.416 126.265 288.416Z"
                  fill="#5A57FF"
                  fill-opacity="0.62"
                />
                <path
                  d="M162.265 288.416C158.953 288.416 156.265 285.728 156.265 282.416V234.416C156.265 231.104 158.953 228.416 162.265 228.416C165.577 228.416 168.265 231.104 168.265 234.416V282.416C168.265 285.728 165.577 288.416 162.265 288.416Z"
                  fill="#5A57FF"
                  fill-opacity="0.62"
                />
                <path
                  d="M198.265 288.416H90.2654C86.9534 288.416 84.2654 285.728 84.2654 282.416C84.2654 279.104 86.9534 276.416 90.2654 276.416H198.265C201.577 276.416 204.265 279.104 204.265 282.416C204.265 285.728 201.577 288.416 198.265 288.416Z"
                  fill="#FF577F"
                />
                <path
                  d="M270.265 240.416H18.2654C8.34138 240.416 0.265381 232.34 0.265381 222.416V66.4155C0.265381 56.4915 8.34138 48.4155 18.2654 48.4155H66.2654C69.5774 48.4155 72.2654 51.1035 72.2654 54.4155C72.2654 57.7275 69.5774 60.4155 66.2654 60.4155H18.2654C14.9654 60.4155 12.2654 63.1035 12.2654 66.4155V222.416C12.2654 225.728 14.9654 228.416 18.2654 228.416H270.265C273.565 228.416 276.265 225.728 276.265 222.416V66.4155C276.265 63.1035 273.565 60.4155 270.265 60.4155H258.265C254.953 60.4155 252.265 57.7275 252.265 54.4155C252.265 51.1035 254.953 48.4155 258.265 48.4155H270.265C280.189 48.4155 288.265 56.4915 288.265 66.4155V222.416C288.265 232.34 280.189 240.416 270.265 240.416Z"
                  fill="url(#paint0_linear)"
                />
                <path
                  d="M153.373 142.472C151.837 142.472 150.301 141.884 149.125 140.72L105.961 97.5555C103.693 95.2995 103.597 91.6635 105.745 89.2995L141.109 50.0475C166.213 21.0435 206.041 1.05153 240.145 0.415527C242.149 0.439527 243.361 1.02753 244.501 2.16753C245.653 3.31953 246.289 4.89153 246.253 6.52353C245.605 40.6275 225.625 80.4675 196.525 105.656L157.369 140.936C156.241 141.968 154.801 142.472 153.373 142.472ZM118.477 93.1035L153.589 128.216L188.605 96.6675C213.517 75.1035 231.121 42.1755 233.893 12.7875C204.517 15.5715 171.601 33.1635 150.109 57.9915L118.477 93.1035Z"
                  fill="url(#paint1_linear)"
                />
                <path
                  d="M169.513 170.936C168.973 170.936 168.421 170.864 167.881 170.708C165.781 170.12 164.173 168.452 163.669 166.328L155.197 130.928C154.429 127.7 156.421 124.472 159.637 123.692C162.877 122.9 166.105 124.916 166.873 128.132L172.501 151.628C182.917 135.332 185.005 114.464 185.221 102.248C185.281 98.9475 188.197 96.5235 191.329 96.3555C194.629 96.4155 197.269 99.1635 197.209 102.464C196.705 130.856 188.377 154.544 173.749 169.172C172.609 170.324 171.073 170.936 169.513 170.936Z"
                  fill="url(#paint2_linear)"
                />
                <path
                  d="M117.145 91.6516C116.689 91.6516 116.221 91.6036 115.753 91.4836L80.3534 82.9996C78.2294 82.4956 76.5614 80.8996 75.9734 78.7996C75.3854 76.7116 75.9734 74.4676 77.5094 72.9316C92.1374 58.3036 115.813 49.9756 144.217 49.4716C147.349 49.6396 150.265 52.0516 150.325 55.3636C150.385 58.6756 147.745 61.4116 144.433 61.4716C132.217 61.6876 111.361 63.7636 95.0654 74.1916L118.561 79.8196C121.789 80.5876 123.781 83.8276 123.001 87.0556C122.329 89.8036 119.869 91.6516 117.145 91.6516Z"
                  fill="url(#paint3_linear)"
                />
                <g
                  filter="drop-shadow(0px 4px 30px white)"
                  style={{ transition: ".3 all ease-in-out" }}
                >
                  <path
                    d="M72.2654 180.416C70.6934 180.416 69.1574 179.804 68.0174 178.664C66.4574 177.104 65.8814 174.812 66.5174 172.7C68.4974 166.076 78.7814 132.644 86.8454 124.58C96.5774 114.86 112.369 114.86 122.101 124.58C131.821 134.3 131.809 150.116 122.101 159.836C114.037 167.888 80.6054 178.196 73.9814 180.176C73.4294 180.332 72.8414 180.416 72.2654 180.416ZM104.485 129.284C101.185 129.284 97.8614 130.532 95.3414 133.052C91.9454 136.46 86.0654 151.496 81.4934 165.188C95.1974 160.604 110.233 154.748 113.629 151.34C118.657 146.3 118.657 138.092 113.629 133.064C111.097 130.544 107.797 129.284 104.485 129.284ZM117.865 155.588H117.985H117.865Z"
                    fill="#DBFF4D"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="26.2628"
                    y="81.2896"
                    width="143.124"
                    height="143.126"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="20" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear"
                    x1="0.265381"
                    y1="48.4155"
                    x2="288.265"
                    y2="240.416"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#5A57FF" />
                    <stop offset="1" stop-color="#5A57FF" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="175.225"
                    y1="0.415527"
                    x2="175.225"
                    y2="142.472"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#5A57FF" />
                    <stop offset="0.0001" stop-color="#5A57FF" />
                    <stop offset="1" stop-color="#5A57FF" stop-opacity="0.3" />
                    <stop offset="1" stop-color="#5A57FF" stop-opacity="0.3" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear"
                    x1="176.122"
                    y1="96.3555"
                    x2="176.122"
                    y2="170.936"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF577F" />
                    <stop offset="1" stop-color="#FF577F" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear"
                    x1="113.038"
                    y1="49.4716"
                    x2="113.038"
                    y2="91.6516"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF577F" />
                    <stop offset="1" stop-color="#FF577F" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Hero;
