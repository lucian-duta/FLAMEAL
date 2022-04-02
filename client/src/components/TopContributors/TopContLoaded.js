import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import Leaderboard from "../Leaderboard/Leaderboard";
import TopContLoading from "./TopContLoading";

/**
 * *TopContLoaded
 * *Displays the leaderboard and the gauge for top contributors and total contributors
 * TODO:Make the gauge self updating
 * @param {*} cont - the number of contributors this month
 * @returns - the react component
 */

const TopContLoaded = ({ cont }) => {
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
              maxValue={10}
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
