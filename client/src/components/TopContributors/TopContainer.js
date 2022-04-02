import React, { useState, useEffect } from "react";
import TopContLoaded from "../../components/TopContributors/TopContLoaded";
import extractFeatures, {
  fetchContLastMonth,
} from "../../Web3/extractFeatures";
import "./TopCont.css";

/**
 * * TopCont
 * * This component should display the top contributors alogside the total contributors

 * @returns - either the loaded component or the loading component
 */
const TopContainer = () => {
  //use a hook to store the number of contributors
  const [cont, setCont] = useState();

  useEffect(() => {
    console.log("Data fetched", fetchContLastMonth());
    extractFeatures()
      .then(() => {
        console.log("Data fetched", fetchContLastMonth());
        setCont(fetchContLastMonth());
        console.log("Data fetched", fetchContLastMonth());
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  //function to fetch the data

  return (
    <>
      <TopContLoaded cont={cont} />
    </>
  );
};

export default TopContainer;
