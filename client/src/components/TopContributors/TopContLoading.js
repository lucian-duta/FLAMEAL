import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

/**
 * The react component to display a loading element while the data is fetched using the {@link ClimbingBoxLoader} element to display the loading animation
 * @category Top Contributors
 * @component
 * @external ClimbingBoxLoader
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
