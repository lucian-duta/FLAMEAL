import React from "react";
import StatsNumbers from "./StatsNumbers";
import "./Statistics.css";
import { StatsBar } from "./StatsBar";

/**
 * React component to display the statistics of application over the last 12 months.
 * @borrows {@link StatsNumbers} as a child component to display various metrics
 * @borrows {@link StatsBar} as a child component to display the bar chart of donations over the last 12 months
 * @returns {ReactComponent} the statistics component
 */
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
