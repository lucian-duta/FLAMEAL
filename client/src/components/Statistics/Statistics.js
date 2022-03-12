import React from "react";
import StatsNumbers from "./StatsNumbers";
import "./Statistics.css";

const Statistics = () => {
  return (
    <>
      <div className="stats-container">
        <div className="stats-numbers">
          <StatsNumbers />
        </div>
        <div className="stats-graph"></div>
      </div>
    </>
  );
};

export default Statistics;
