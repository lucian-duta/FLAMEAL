import React, { useState, useEffect } from "react";
import TopContLoaded from "../../components/TopContributors/TopContLoaded";
import extractFeatures, {
  fetchContLastMonth,
} from "../../Web3/extractFeatures";
import "./TopCont.css";

/**
 * The component to display the top contributors in the network
 * @returns {ReactComponent} the top contributors component
 */
const TopContainer = () => {
  //use a hook to store the number of contributors
  const [cont, setCont] = useState();
  //when the component mounts, fetch the number of contributors
  useEffect(() => {
    //console.log("Data fetched", fetchContLastMonth());
    extractFeatures()
      .then(() => {
        //console.log("Data fetched", fetchContLastMonth());
        setCont(fetchContLastMonth());
        //console.log("Data fetched", fetchContLastMonth());
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <TopContLoaded cont={cont} />
    </>
  );
};

export default TopContainer;
