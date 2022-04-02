import React from "react";
import {
  fetchContLastMonth,
  fetchPeopleAided,
  fetchPeopleAidedLM,
  fetchTotalSenders,
  fetchTotalUsers,
  fetchTransCount,
} from "../../Web3/extractFeatures";
import "./Statistics.css";

const StatsNumbers = () => {
  return (
    <>
      <div className="stats-num-cont">
        <div className="stats-num-comp">
          <p>Donations: {fetchTransCount()}</p>
          <br />
          <p>Users aided: {fetchPeopleAided()}</p>
          <br />
          <p>Users aided last month: {fetchPeopleAidedLM()}</p>
        </div>
        <div className="stats-num-comp">
          <p>Users joined: {fetchTotalUsers()}</p>
          <br />
          <p>Contributors: {fetchTotalSenders()}</p>
          <br />
          <p>Contributors last month: {fetchContLastMonth()}</p>
        </div>
      </div>
    </>
  );
};

export default StatsNumbers;
