import React, { useState, useEffect, useCallback } from "react";
import extractFeatures, {
  fetchContLastMonth,
} from "../../Web3/extractFeatures";
import "./TopCont.css";
import TopContainer from "../../components/TopContributors/TopContainer";

/**
 * * TopCont
 * * This component should display the top contributors alogside the total contributors

 * @returns - either the loaded component or the loading component
 */
export default function TopCont() {
  return (
    <>
      <TopContainer />
    </>
  );
}
