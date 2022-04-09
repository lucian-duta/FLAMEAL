import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

// Constant holding the array of elements for the dropdown list
const MenuItems = [
  {
    title: "Food banks",
    path: "/foodbanks",
    cName: "dropdown-link",
  },
  {
    title: "User statiscics",
    path: "/userstats",
    cName: "dropdown-link",
  },
  {
    title: "Top contributors",
    path: "/topcont",
    cName: "dropdown-link",
  },
];
/**
 * The dropdown component used in the navbar (statistics button)
 * @returns {ReactComponent} the dropdown component as a list of links
 */
function Dropdown() {
  //constant to hold the state of the dropdown menu
  const [click, setClick] = useState(false);
  //function to handle the click of the stats button
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => {
                  setClick(false);
                }}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Dropdown;
