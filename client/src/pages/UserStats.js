import React, { useEffect, useState } from "react";
import Statistics from "../components/Statistics/Statistics";
import TopContLoading from "../components/TopContributors/TopContLoading";
import extractFeatures from "../Web3/extractFeatures";
/**
 * * UserStats
 * * This should display user statistics:
 * * - users joined
 * * - people aided
 * * - graphs showing the activity on the platform
 *
 * TODO: Find a way to measuere activity
 * ? How can I generate graphs?
 * !This feature will be implemented later
 * @returns
 */

/**
 * React component to display the user statistics page
 * @borrows {@link Statistics} as a child component to display the statistics element
 * @borrows {@link TopContLoading} as a child component to display the loading element
 * @returns {ReactComponent} the {@link Statistics statiscics} component if the data is fetched or the {@link TopContLoading loading} component if the data is not fetched
 */
export default function UserStats() {
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
}
