import React from "react";
import "./Landing.css";
/**
 * The function to display the image and the logo of the application
 * @returns {ReactComponent} the title component
 */
const Title = () => {
  return (
    <>
      <div className="landing-top">
        <div className="landing-title">
          <p>
            <b>F</b>ood
          </p>
          <p>
            <b>L</b>ogistics
          </p>
          <p>
            <b>A</b>cknowledged
          </p>
          <p>
            <b>M</b>eans
          </p>
          <p>
            <b>E</b>volution
          </p>
          <p>
            <b>A</b>chievements
          </p>
          <p>
            <b>L</b>ife
          </p>
        </div>
        <div className="landing-logo">
          <img
            src={window.location.origin + "/logo-flameal.png"}
            width="300px"
            height="300px"
            alt="flameal logo"
          />
        </div>
      </div>
    </>
  );
};
//<a href="https://www.flaticon.com/free-icons/blockchain" title="blockchain icons">Blockchain icons created by Good Ware - Flaticon</a>
export default Title;
