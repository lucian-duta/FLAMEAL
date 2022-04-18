import React, { useEffect, useState } from "react";
import Statistics from "../components/Statistics/Statistics";
import TopContLoading from "../components/TopContributors/TopContLoading";
import extractFeatures from "../Web3/extractFeatures";

/**
 * React main component to display the user statistics page
 * @category User Statistics
 * @component
 * @borrows {@link Statistics} as a child component to display the statistics element
 * @borrows {@link TopContLoading} as a child component to display the loading element
 * @returns {ReactComponent} the {@link Statistics statiscics} component if the data is fetched or the {@link TopContLoading loading} component if the data is not fetched
 */
const UserStats = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    extractFeatures()
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return <>{isLoading ? <TopContLoading /> : <Statistics />}</>;
};
export default UserStats;
