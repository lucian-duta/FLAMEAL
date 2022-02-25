import React, { useState } from "react";
import { Button } from "../Button/Button";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

/**
 * *Navbar
 * * handles the navigation features of the app
 * TODO: Change the style of the links
 * ! Possible issues on mobile rendering - further testing required
 * @returns The html div
 */
function Navbar() {
  const [click, setClick] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Flameal
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/transfer"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Transfer
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/myinventory"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              My Inventory
            </Link>
          </li>

          <li
            className="nav-item-opt"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/stats" className="nav-links" onClick={closeMobileMenu}>
              Stats <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className="nav-item-drop">
            <Link
              to="/foodbanks"
              className="nav-links-drop"
              onClick={closeMobileMenu}
            >
              Food Banks
            </Link>
          </li>

          <li className="nav-item-drop">
            <Link
              to="/userstats"
              className="nav-links-drop"
              onClick={closeMobileMenu}
            >
              User Statistics
            </Link>
          </li>

          <li className="nav-item-drop">
            <Link
              to="/topcont"
              className="nav-links-drop"
              onClick={closeMobileMenu}
            >
              Top Contributors
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/signup"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
