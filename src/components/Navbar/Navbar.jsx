import React from "react";
import { useState } from "react";
import "./Navbar.css";
import Started from "../StartedButton/Started";
import Logo from "../../img/logo.svg";
import IconHamburger from "../../img/icon-hamburger.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-logo">
          <img src={Logo} alt="" />
          <img
            className="icon-hamburger"
            src={IconHamburger}
            alt=""
            onClick={handleClick}
          />
        </div>
        <div
          className={`nav-menu ${menuOpen ? "open" : "closed"}`}
          onClick={handleClick}
        >
          <a className="nav-link" href="/#">
            Pricing
          </a>
          <a className="nav-link" href="/#">
            Product
          </a>
          <a className="nav-link" href="/#">
            About Us
          </a>
          <a className="nav-link" href="/#">
            Careers
          </a>
          <a className="nav-link" href="/#">
            Community
          </a>
        </div>
        <div className="nav-request">
          <Started />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
