import React from "react";
import Facebook from "../imgs/facebook.png";
import Instagram from "../imgs/ig.png";
import LinkedIn from "../imgs/linkedin.png";
import X from "../imgs/x.png";

export default function Footer() {
  return (
    <footer>
      <a href="https://twitter.com/AlejoMiguel_" rel="noreferrer" target="_blank"><img src={X} alt="X" /></a>
      <a href="https://www.facebook.com/alereyesss05/" rel="noreferrer" target="_blank"><img src={Facebook} alt="Facebook" /></a>
      <a href="https://www.instagram.com/alejomiguel_/" rel="noreferrer" target="_blank"><img src={Instagram} alt="Instagram" /></a>
      <a href="https://www.linkedin.com/in/alejandro-lozada-960b05284/" rel="noreferrer" target="_blank"><img src={LinkedIn} alt="LinkedIn" /></a>
    </footer>
  )
}