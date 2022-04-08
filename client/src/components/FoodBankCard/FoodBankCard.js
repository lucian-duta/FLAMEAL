import React from "react";
import "./FoodBankCard.css";

const FoodBankCard = ({ fbData }) => {
  return (
    <>
      <div className="showcase-card">
        <div className="card-image">
          <img
            src={fbData.pic || window.location.origin + "/food-bank.png"}
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
