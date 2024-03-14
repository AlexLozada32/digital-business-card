import React from "react";
import myImg from "../images/alejandro-lozada.jpg";
import mailIcon from "../images/mail.png";
import GitHub from "../images/github.png";

export default function Info() {
  return (
    <header>
      <img src={myImg} alt="Alejandro Lozada" />
      <h1>Alejandro Lozada</h1>
      <h2>Full-Stack developer</h2>
      <div className="buttons--card">
        <a
          href="mailto:alexlozada.reyes@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <img className="mail-icon" src={mailIcon} alt="mail-icon" /> Email
          </button>
        </a>

        <a
          href="https://github.com/AlexLozada32"
          target="_blank"
          rel="noreferrer"
        >
          <button className="githubBtn">
            <img className="github-icon" src={GitHub} alt="github-icon" />{" "}
            GitHub
          </button>
        </a>
      </div>
    </header>
  );
}
