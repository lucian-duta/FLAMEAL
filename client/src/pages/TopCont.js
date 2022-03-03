import React from "react";
import Web3Connect from "./Transfer/Web3Connect";
import Web3Connectv2 from "./Transfer/Web3Connectv2";
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
      <Web3Connectv2 />
      {/* <h1 className="topcont">Top Contributors</h1> */}
    </>
  );
}
