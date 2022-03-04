import React from "react";

import Web3Connectv2 from "./Transfer/Web3Connectv2";
import SendData from "./Transfer/sendData";
/**
 * * TopCont
 * * This should shot the top contributors based on the number of transactions
 * TODO: Find a way to count transactions
 * ? Would it be just a basic list?
 * !This feature will be implemented later
 * @returns
 */
export default function TopCont() {
  const address = "0x0cbC0EafaA0f1043c386287eEB1E57da6a3290bB";
  const cont = "HELLLO";
  return (
    <>
      {SendData(address, cont)}
      <p>GGGG</p>
      {/* <h1 className="topcont">Top Contributors</h1> */}
    </>
  );
}
