import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer fixed-bottom">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            /LinkedIn{" "}
          </a>
          <a
            href="https://github.com/Pendarvis5"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            /GitHub{" "}
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            /Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
