import React from "react";
import Landing from "../components/LandingPage/Landing";

/**
 * React component to display the landing page
 * @borrows {@link Landing} as a child component to display the landing page element
 * @returns {ReactComponent} the landing page component
 */
export default function Intro() {
  return (
    <>
      <Landing />
    </>
  );
}
