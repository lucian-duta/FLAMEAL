import React from "react";
import SearchTransaction from "../components/SearchTransaction/SearchTransaction";
/**
 * The main component to display the search transaction page used in the router
 * @category Search Transactions
 * @component
 * @returns {ReactComponent} the search transaction component
 */
const Explorer = () => {
  return (
    <div>
      <SearchTransaction />
    </div>
  );
};

export default Explorer;
