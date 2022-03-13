import React from "react";
import "./Landing.css";
import LandingContent from "./LandingContent";
import Title from "./Title";
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
