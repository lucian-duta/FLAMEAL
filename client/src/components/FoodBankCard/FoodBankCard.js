import React from "react";
import "./FoodBankCard.css";
import foodbankimg from "../../assets/food-bank.png";
/**
 * The foodbank card component used in the foodbank page and the foodbank card preview
 * @param {Object} fbData - the data for the foodbank card
 * @returns {ReactComponent} the foodbank card component
 */
const FoodBankCard = ({ fbData }) => {
  return (
    <>
      <div className="showcase-card">
        <div className="card-image">
          <img
            //if no image is provided use the default image
            src={fbData.pic || foodbankimg}
            width="350px"
            height="180px"
            alt="foodbank"
          />
        </div>
        <div className="card-text">
          <h1>{fbData.name}</h1>
          <div className="card-description">{fbData.description}</div>
        </div>
        <div className="card-links">
          <div className="card-links-address">
            <h1>
              Address:
              {<p className="card-address">{fbData.address}</p>}
            </h1>
          </div>
          <div className="card-links-trans">
            <h1>Transactions: {fbData.trans}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodBankCard;
