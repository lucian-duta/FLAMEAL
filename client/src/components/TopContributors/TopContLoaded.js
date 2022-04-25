import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import Leaderboard from "../Leaderboard/Leaderboard";
import TopContLoading from "./TopContLoading";

/**
 * The component to display the top contributors in the network by displaying
 * the leaderboard and the gauge for top contributors in the last month
 * @category Top Contributors
 * @component
 * @borrows {@link TopContLoading} as a child component to display the loading animation if the data was not fetched
 * @borrows {@link Leaderboard} as a child component to display the leaderboard of top contributors
 * @param {Number} cont - the number of contributors this month
 * @returns {ReactComponent} the component holding the leaderboard and the gauge or the loading component if the data is not fetched yet
 */
const TopContLoaded = ({ cont }) => {
  //if the data is not fetched yet, display the loading animation
  const calcRange = (cont) => {
    if (cont < 10) {
      return 1;
    } else if (cont < 50 && cont >= 10) {
      return 5;
    } else if (cont < 100 && cont >= 50) {
      return 10;
    } else if (cont < 200 && cont >= 100) {
      return 20;
    } else if (cont < 500 && cont >= 200) {
      return 50;
    } else if (cont < 1000 && cont >= 500) {
      return 100;
    }
  };
  return !cont ? (
    <TopContLoading />
  ) : (
    <>
      <div className="tc-container">
        <div className="tc-container-lead">
          <Leaderboard />
        </div>
        <div className="tc-container-gauge">
          <h1 className={"title-gauge"}>Total contributors this month</h1>
          <div className="tc-gauge">
            <ReactSpeedometer
              fluidWidth={true}
              fluidHeight={true}
              minValue={0}
              maxValue={10 * calcRange(cont)}
              segments={1}
              ringWidth={70}
              segmentColors={["#0083F9"]}
              currentValueText="${value} contributors"
              value={cont}
              textColor={"#fff"}
              needleTransition="easeElastic"
              needleColor="white"
              needleHeightRatio={0.8}
              needleTransitionDuration={2000}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopContLoaded;
