import React from "react";
import StatsNumbers from "./StatsNumbers";
import "./Statistics.css";
import { StatsBar } from "./StatsBar";

const Statistics = () => {
  return (
    <>
      <div className="stats-container">
        <div className="stats-numbers">
          <StatsNumbers />
        </div>
        <div className="stats-graph">
          <h1>Donations last 12 months</h1>
          <StatsBar />
        </div>
      </div>
    </>
  );
};

export default Statistics;
