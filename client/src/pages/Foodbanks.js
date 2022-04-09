import React from "react";
import Showcase from "../components/Showcase/Showcase";

/**
 * React component to display the foodbanks showcase page
 * @borrows {@link Showcase} as a child component to display the showcase element
 * @returns {ReactComponent} the showcase component
 */
export default function Foodbanks() {
  //console.log(JSON.stringify(fetchTransactions));
  return (
    <>
      <Showcase />
    </>
  );
}
