import React from "react";
import {
  fetchContLastMonth,
  fetchReceivers,
  fetchReceiversLM,
  fetchTotalSenders,
  fetchTotalUsers,
  fetchTransCount,
} from "../../Web3/extractFeatures";
import "./Statistics.css";

/**
 * React component to display various use statistics of the application
 * - Total number of donations using the {@link fetchTransCount} function
 * - Number of users receiving donations using the {@link fetchReceivers} function
 * - Number of users receiving donations in the last month using the {@link fetchReceiversLM} function
 * - Total number of users on the network using the {@link fetchTotalUsers} function
 * - Number of users who have contributed using the {@link fetchTotalSenders} function
 * - Number of contributors last month using the {@link fetchContLastMonth} function
 * @returns {ReactComponent} the statistics component
 */
const StatsNumbers = () => {
  return (
    <>
      <div className="stats-num-cont">
        <div className="stats-num-comp">
          <p>Donations: {fetchTransCount()}</p>
          <br />
          <p>Users aided: {fetchReceivers()}</p>
          <br />
          <p>Users aided last month: {fetchReceiversLM()}</p>
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
