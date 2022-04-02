import React from "react";
import FoodBankCard from "../FoodBankCard/FoodBankCard";
import "./Showcase.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const ShowcaseItems = ({ foodbanks }) => {
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
        };
        console.log(index);
        return <FoodBankCard key={index} fbData={fbData} />;
      })}
    </>
  );
};

export default ShowcaseItems;
