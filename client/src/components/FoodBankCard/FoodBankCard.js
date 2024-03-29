import React from "react";
import "./FoodBankCard.css";
import foodbankimg from "../../assets/food-bank.png";
/**
 * The foodbank card component used in the foodbank page and the foodbank card preview
 * @category Showcase
 * @component
 * @param {Object} fbData - the data for the foodbank card
 * @returns {ReactComponent} the foodbank card component
 */
const FoodBankCard = ({ fbData, seeTrans, donate }) => {
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
            <div className="add-don">
              <h1>Address:</h1>

              {window.location.hash === "#/changefb" ? (
                ""
              ) : (
                <button
                  className="btn-fb-donate"
                  onClick={() => {
                    donate(fbData.address);
                  }}
                >
                  Donate
                </button>
              )}
            </div>

            <h1>{<p className="card-address">{fbData.address}</p>}</h1>
          </div>
          <div className="card-links-trans">
            <h1>Transactions: {fbData.trans}</h1>
            {window.location.hash === "#/changefb" ? (
              ""
            ) : (
              <button
                className="btn-fb"
                onClick={() => {
                  seeTrans(fbData.address);
                }}
              >
                Explore
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodBankCard;
