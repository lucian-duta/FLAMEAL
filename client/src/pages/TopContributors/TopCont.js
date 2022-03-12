import React, { useState, useEffect, useCallback } from "react";
import extractFeatures, {
  fetchContLastMonth,
} from "../../Web3/extractFeatures";
import "./TopCont.css";
import TopContLoaded from "../../components/TopContributors/TopContLoaded";
import TopContLoading from "../../components/TopContributors/TopContLoading";

/**
 * * TopCont
 * * This component should display the top contributors alogside the total contributors

 * @returns - either the loaded component or the loading component
 */
export default function TopCont() {
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
    fetchData();
    forceUpdate();
  }, []);

  //function to fetch the data
  const fetchData = () => {
    extractFeatures()
      .then(() => {
        setCont(fetchContLastMonth());
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div>
        {isLoading ? <TopContLoading /> : <TopContLoaded cont={cont} />}
      </div>
    </>
  );
}
