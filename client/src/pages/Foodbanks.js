import React from "react";
import extractFeatures from "../Web3/extractFeatures";

import getTransactions, { fetchTransactions } from "../Web3/getTransactions";

/**
 * * Foodbanks showcase page
 * ? Should I use react-slick?
 * TODO: Reasearch ways to implement the horisontal scrollable cards
 * !Possibly implemented at a later stage
 * @returns
 */
export default function Foodbanks() {
  //getTransactions();
  extractFeatures();
  //console.log(JSON.stringify(fetchTransactions));
  return (
    <>
      <h1 className="foodbanks">Food banks</h1>
    </>
  );
}
