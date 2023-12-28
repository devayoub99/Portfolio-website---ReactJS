import { useState } from "react";

import { navLinks } from "../../data";
import Link from "../Link";
import Button from "../Button";

import logo from "../../assets/logo.svg";
import BarsIcon from "../../assets/bars.svg";
import downloadIcon from "../../assets/download.svg";

import myResume from "../../assets/resume.pdf";

export default function Header() {
  const [menuOpened, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <header className="header ">
      <div className="container">
        <h2 className="logo">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </h2>
        <nav>
          <ul className={`links ${menuOpened ? "opened" : ""}`}>
            {navLinks.map((link) => {
              return <Link key={link} title={link} />;
            })}
          </ul>
        </nav>
        <div
          className={`bars-icon ${menuOpened ? "opened" : ""}`}
          onClick={toggleMenu}
        >
          <img src={BarsIcon} alt="Bars" />
        </div>
        <Button href={myResume} className="button black-button">
          resume
          <img src={downloadIcon} alt="download" />
        </Button>
      </div>
    </header>
  );
}
