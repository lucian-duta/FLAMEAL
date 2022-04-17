import React from "react";
import TopContainer from "../components/TopContributors/TopContainer";

/**
 * The main component to display the top contributors of the network
 * @category Top Contributors
 * @component
 * @borrows {@link TopContainer} as a child component to display the top contributors element
 * @returns {ReactComponent} the top contributors component
 */
const TopCont = () => {
  return (
    <>
      <TopContainer />
    </>
  );
};
export default TopCont;
