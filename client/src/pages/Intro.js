import React from "react";
import Landing from "../components/LandingPage/Landing";

/**
 * React component to display the landing page
 * @category Landing Page
 * @component
 * @borrows {@link Landing} as a child component to display the landing page element
 * @returns {ReactComponent} the landing page component
 */
const Intro = () => {
  return (
    <>
      <Landing />
    </>
  );
};
export default Intro;
