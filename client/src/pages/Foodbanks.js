import React from "react";
import Showcase from "../components/Showcase/Showcase";

/**
 * React component to display the foodbanks showcase page
 * @category Showcase
 * @component
 * @borrows {@link Showcase} as a child component to display the showcase element
 * @returns {ReactComponent} the showcase component
 */
const Foodbanks = () => {
  //console.log(JSON.stringify(fetchTransactions));
  return (
    <>
      <Showcase />
    </>
  );
};
export default Foodbanks;
