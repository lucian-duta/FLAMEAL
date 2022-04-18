import React from "react";
import "./Landing.css";
import LandingContent from "./LandingContent";
import Title from "./Title";
/**
 * A function to return the landing page component displayed when the user opens the app
 *
 * TODO Add description of the application
 * @category LandingPage
 * @component
 * @borrows {@link LandingContent} as a child component to hold images and text of the landing page
 * @borrows {@link Title} as a child component to display the title of the page
 * @returns {ReactComponent} the landing page component
 */
const Landing = () => {
  return (
    <>
      <div className="landing-container">
        <Title />
        <LandingContent />
      </div>
    </>
  );
};

export default Landing;
