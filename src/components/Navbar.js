import React from "react";
import { Link } from "react-router-dom";
import NavbarCSS from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={NavbarCSS.navbar}>
        <div className={NavbarCSS.container}>
          <Link to="/" className={NavbarCSS.logo}>
            CryptoChecker
          </Link>

          <ul className={NavbarCSS.navLinks}>
            <Link to="/" className="home">
              <li>Home</li>
            </Link>
            <Link to="/about" className="about">
              <li>About</li>
            </Link>
            <Link to="/contact" className="contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
