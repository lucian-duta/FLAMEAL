import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

/**
 * *TopContLoading
 * * Used to display a loading element while the data is fetched
 * @returns - a react component
 */
const TopContLoading = () => {
  return (
    <div className={"topcont"}>
      <ClimbingBoxLoader />
    </div>
  );
};

export default TopContLoading;
