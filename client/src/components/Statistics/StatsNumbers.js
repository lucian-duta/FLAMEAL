import React, { useState, useEffect } from "react";
import {
  fetchPeopleAided,
  fetchPeopleAidedLM,
} from "../../Web3/extractFeatures";
import "./Statistics.css";

const StatsNumbers = () => {
  console.log("PPL", fetchPeopleAided());
  return (
    <>
      <div className="stats-num-comp">
        <p>People aided: {fetchPeopleAided()}</p>
        <br />
        <p>People aided last month: {fetchPeopleAided()}</p>
      </div>
    </>
  );
};

export default StatsNumbers;
