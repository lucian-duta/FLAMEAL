import React, { useState, useEffect } from "react";
import {
  fetchPeopleAided,
  fetchPeopleAidedLM,
} from "../../Web3/extractFeatures";
import "./Statistics.css";

const StatsNumbers = () => {
  return (
    <>
      <div className="stats-num-cont">
        <div className="stats-num-comp">
          <p>People aided: {fetchPeopleAided()}</p>
          <br />
          <p>People aided last month: {fetchPeopleAidedLM()}</p>
        </div>
        <div className="stats-num-comp">
          <p>People joined: {20}</p>
          <br />
          <p>People joined last month: {4}</p>
        </div>
      </div>
    </>
  );
};

export default StatsNumbers;
