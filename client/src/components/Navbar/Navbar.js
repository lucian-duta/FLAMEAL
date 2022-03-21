import React, { useState } from "react";
import { Button } from "../Button/Button";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

/**
 * *Navbar
 * * handles the navigation features of the app
 * TODO: Change the style of the links
 * TODO: DISPLAY LOGO
 * ! Possible issues on mobile rendering - further testing required
 * @returns - the navbar component
 */
function Navbar() {
  //constant to hold the state of the button appearing on mobile version
  const [click, setClick] = useState(false);
  //constant to hold the state of the dropdown menu( needed for mobile compatibility)
  const [dropdown, setDropdown] = useState(false);
  //handle the clik of the menu button
  const handleClick = () => setClick(!click);
  //function to close the mobile menu after a link was clicked
  const closeMobileMenu = () => setClick(false);
  //function to display the dropdown menu if the screen is big enough
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      //if the windown is small (mobile view) the dropdown menu will not be displayed
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  //function to hide the dropdown menu if the screen is big enough
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      //if the windown is small (mobile view) the dropdown menu will not be displayed
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <div className="navbar-logo-text">Flameal</div>

          <img
            className="fa-firstdraft"
            src={window.location.origin + "/logo-flameal-nav.png"}
            width="200rem"
            height="50rem"
          />
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
              Login
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
