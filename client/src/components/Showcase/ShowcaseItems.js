import React from "react";
import FoodBankCard from "../FoodBankCard/FoodBankCard";
import "./Showcase.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const ShowcaseItems = ({ foodbanks, transMap }) => {
  console.log(transMap);
  return !foodbanks.length ? (
    <div className="showcase-loader">
      <ClimbingBoxLoader loading={true} color={"#fff"} size={30} />
    </div>
  ) : (
    <>
      {foodbanks.map((fb, index) => {
        const fbData = {
          name: fb.fbName,
          description: fb.fbDescription,
          address: fb.fbAddress,
          pic: fb.fbPic,
          trans: transMap[fb.fbAddress] ? transMap[fb.fbAddress] : 0,
        };
        console.log(index);
        console.log("ADD OF FB", fbData.address);
        console.log("TRANSACTIONS OF IT: ", transMap[fbData.address]);
        return <FoodBankCard key={index} fbData={fbData} />;
      })}
    </>
  );
};

export default ShowcaseItems;
