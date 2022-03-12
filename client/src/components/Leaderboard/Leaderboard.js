import React from "react";
import { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { RiCloseCircleLine } from "react-icons/ri";
import { fetchTopSenders } from "../../Web3/extractFeatures";
import "./Leaderboard.css";

//TODO add comments
const Leaderboard = () => {
  const contributors = fetchTopSenders();
  console.log("frontend", contributors);

  return (
    <div className="lead-app">
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
