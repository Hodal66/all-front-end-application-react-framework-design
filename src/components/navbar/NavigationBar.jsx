import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../button/ButtonComponent";
import DropDown from "./DropDown";
import "./navbar.css";
function NavigationBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [dropDown, setDropDown] = useState(false);
  const closeMobileMenu = () => {
    setClick(!click);
  };
  const onMouseEnter = () => {
    if (window.innerWidth <= 960) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth <= 960) {
      setDropDown(false);
    } else {
      setDropDown(false);
    }
  };
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <span className="mht">MHT</span>HODAL
          {/* <i className="fa fa-firstdraft" /> */}
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" onClick={closeMobileMenu} className="nav-links">
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/service" onClick={closeMobileMenu} className="nav-links">
              Services <i className="fas fa-caret-down" />
            </Link>
            {dropDown && <DropDown />}
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              onClick={closeMobileMenu}
              className="nav-links"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <ButtonComponent buttonText="Sign up" />
      </nav>
    </div>
  );
}

export default NavigationBar;
