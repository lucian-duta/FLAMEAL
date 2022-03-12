import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import Leaderboard from "../components/Leaderboard/Leaderboard";
import extractFeatures, { fetchContLastMonth } from "../Web3/extractFeatures";
/**
 * * TopCont
 * * This should shot the top contributors based on the number of transactions
 * TODO: Find a way to count transactions
 * ? Would it be just a basic list?
 * !This feature will be implemented later
 * @returns
 */
export default function TopCont() {
  let cont = fetchContLastMonth();
  console.log("CONTLMFR", cont);
  return (
    <>
      <h1 className="topcont">
        {/* <GaugeChart id={"gauge1"} nrOfLevels={1} percent={cont / 10} /> */}
        <ReactSpeedometer
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
      </h1>
    </>
  );
}
