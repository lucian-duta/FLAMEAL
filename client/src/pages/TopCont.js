import React from "react";
import Leaderboard from "../components/Leaderboard/Leaderboard";
import extractFeatures from "../Web3/extractFeatures";
/**
 * * TopCont
 * * This should shot the top contributors based on the number of transactions
 * TODO: Find a way to count transactions
 * ? Would it be just a basic list?
 * !This feature will be implemented later
 * @returns
 */
export default function TopCont() {
  return (
    <>
      <h1 className="topcont">
        <Leaderboard />
      </h1>
    </>
  );
}
