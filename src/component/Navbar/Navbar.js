import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuClick, setMenuClick] = useState(false);
  const menuToggle = () => setMenuClick(!menuClick);
  const closeMenu = () => setMenuClick(false);
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            FILM BUNK
          </Link>
          <div className="menu-icon">
            <i
              className={menuClick ? "fas fa-times" : "fas fa-bars"}
              onClick={menuToggle}
            />
          </div>
          <ul className={menuClick ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link className="nav-links" to="/Home" onClick={closeMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/services" onClick={closeMenu}>
                PROJECTS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/services" onClick={closeMenu}>
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/services" onClick={closeMenu}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
