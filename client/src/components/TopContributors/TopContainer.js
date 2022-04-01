import React, { useState, useEffect, useCallback } from "react";
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
  //made use of a hook to store the state of loading
  const [isLoading, setLoading] = useState(true);
  //a hook to simulate a change in state for updating
  const [, updateState] = useState();
  //emulating foreced update to rerender the component
  const forceUpdate = useCallback(() => updateState({}), []);
  //fetch the data at rendering stage

  useEffect(() => {
    console.log("Data fetched", fetchContLastMonth());
    extractFeatures()
      .then(() => {
        console.log("Data fetched", fetchContLastMonth());
        setCont(fetchContLastMonth());
        setLoading(false);
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
