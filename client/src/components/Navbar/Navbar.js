import React, { useContext, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import { UserContext } from "../../context/UserContext";
import flamealnav from "../../assets/logo-flameal-nav.png";
/**
 * The React component what handles the navigation features of the app
 *
 * TODO: Enhance the styling of the links
 * @borrows {@link Dropdown} as a child component to hold the dropdown menu activated when the statistics button is clicked
 * @borrows {@link Button} as a child component to display the "Login/Logout" button
 * @returns {ReactComponent} the navbar component
 */
const Navbar = () => {
  const [state, dispatch] = useContext(UserContext);
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
  //hooks for the components dependent on the authentication state
  const [comp, setComp] = useState(null);
  const [butt, setButt] = useState(null);
  const [invComp, setInvComp] = useState("");
  // update the components accoring to the auth state
  useEffect(() => {
    console.log(state.auth);
    //if the user is logged out or not logged in
    if (!state.auth) {
      //setting the mobile button to "login"
      setComp(
        <Link
          to="/signup"
          className="nav-links-mobile"
          onClick={closeMobileMenu}
        >
          Login
        </Link>
      );
      //setting the desktop button to login
      setButt(<Button buttonName="Login" toPage="signup" />);
      //hide the inventory link
      setInvComp("");
    } else {
      //if the user is logged in
      //change the mobile button to "logout"
      setComp(
        <Link
          to="/signup"
          className="nav-links-mobile"
          onClick={closeMobileMenu}
        >
          Logout
        </Link>
      );
      //change the login button to "logout"
      setButt(<Button buttonName="Logout" toPage="" />);

      //show the inventory link
      setInvComp(
        <>
          <li className="nav-item">
            <Link
              to="/myinventory"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              My Inventory
            </Link>
          </li>

          {state.isfb ? ( //if the user is a foodbank show the foodbank edit link
            <li className="nav-item">
              <Link
                to="/changefb"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Edit foodbank
              </Link>
            </li>
          ) : (
            ""
          )}
        </>
      );
    }
  }, [state.auth, state.isfb]); // dependent on the global state of auth and isfb

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <div className="navbar-logo-text">Flameal</div>

          <img
            className="fa-firstdraft"
            src={flamealnav}
            width="200rem"
            height="50rem"
            alt="FLAMEAL logo"
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

          {invComp}

          <li
            className="nav-item-opt"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="#" className="nav-links" onClick={closeMobileMenu}>
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

          <li className="nav-item-drop">
            <Link
              to="/explorer"
              className="nav-links-drop"
              onClick={closeMobileMenu}
            >
              Search Donations
            </Link>
          </li>

          <li className="nav-item">{comp}</li>
        </ul>
        <div
          onClick={() => {
            //when the button is clicked and if the user is logged in
            if (state.auth) {
              //update the global authentication state
              dispatch({
                type: "de_auth",
              });
              //purge the browser storage
              sessionStorage.clear();
            }
          }}
        >
          {butt}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
