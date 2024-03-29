import React from "react";
import FoodBankCard from "../FoodBankCard/FoodBankCard";
import "./Showcase.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { FBContext } from "../../context/FoodBankContext";
import { useNavigate } from "react-router-dom";

/**
 * The react component to display each foodbank card in the showcase
 * @category Showcase
 * @component
 * @param {Array<Object>} foodbank - array of foodbank data to be displayed
 * @param {Object} transMap - map of number of transction in relation to the address of the receiever
 * @returns {ReactComponent} the foodbank items component
 */
const ShowcaseItems = ({ foodbanks, transMap }) => {
  console.log(transMap);
  const navigate = useNavigate();
  const [state, dispatch] = React.useContext(FBContext);
  const seeTransactions = (address) => {
    console.log(address);
    dispatch({ type: "search", payload: address });
    navigate("/explorer");
  };
  const donate = (address) => {
    dispatch({ type: "donate", payload: address });
    navigate("/transfer");
  };
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
        return (
          <FoodBankCard
            key={index}
            fbData={fbData}
            seeTrans={seeTransactions}
            donate={donate}
          />
        );
      })}
    </>
  );
};

export default ShowcaseItems;
