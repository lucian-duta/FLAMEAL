import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

/**
 * *TopContLoading
 * * Used to display a loading element while the data is fetched
 * @returns - a react component
 */

/**
 * The react component to display a loading element while the data is fetched using the {@link ClimbingBoxLoader} element to display the loading animation
 * @returns {ReactComponent} the loading component
 */
const TopContLoading = () => {
  return (
    <div className={"topcont"}>
      <ClimbingBoxLoader />
    </div>
  );
};

export default TopContLoading;
