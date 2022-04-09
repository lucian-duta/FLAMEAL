import React from "react";
import { fetchTopSenders } from "../../Web3/extractFeatures";
import "./Leaderboard.css";

/**
 * A component to display the leaderboard based on the data fetched from the blockchain
 * using the web3 api by calling the {@link fetchTopSenders} function
 * @returns {ReactComponent} the leaderboard component
 */
const Leaderboard = () => {
  const contributors = fetchTopSenders();
  //console.log("frontend", contributors);

  return (
    <div className="lead-app">
      <h1>Top contributors this month</h1>
      <ul className="lead-list">
        {contributors.map((item, key) => (
          <li key={key} className="lead-row">
            {key + 1}. {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
