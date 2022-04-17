import React, { useEffect, useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { BsBoxArrowInRight, BsBoxArrowRight } from "react-icons/bs";
import "./TransItem.css";

/**
 * The component used to display the transaction item in the transaction list
 * @category Search Transactions
 * @component
 * @param {Object} result the result of the transaction to be processed into react component
 * @param {Number} index the index of the result
 * @param {searched} searched the address searched used to decide if the transaction is coming to from the searched address
 * @returns {ReactComponent} the transaction item component
 */
const TransItem = ({ result, index, searched }) => {
  //hook to store the expanded state of the transaction content
  const [opened, setOpened] = useState(false);

  //function to handle the extraction of the date from the timestamp
  //transforming the UNIX time format to a readable format
  const extractDate = (timestamp) => {
    var options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Date(timestamp * 1000).toLocaleDateString("en-GB", options);
  };

  //function to handle the extraction of the contents of the transaction
  //transforming from JSON string to object
  const extractContent = (content) => {
    const contentObj = JSON.parse(content);
    return contentObj;
  };

  return (
    <div key={index} className="search-result-row">
      <div className="search-result-row-item">
        <h1>Sender Address: </h1>
        <p className={searched === result.sender && "address"}>
          {result.sender}
        </p>
      </div>
      <div className="search-result-row-item">
        <h1>Receiver Address: </h1>
        <p className={searched === result.receiver && "address"}>
          {result.receiver}
        </p>
      </div>
      <div className="search-result-row-item">
        <h1>Time of transaction: </h1>
        <p>{extractDate(result.timestamp)}</p>
      </div>

      <div className="search-result-row-item">
        <h1>Content of transaction</h1>
        <MdExpandMore
          className="expand-icon"
          onClick={() => {
            setOpened(!opened);
          }}
        />
        {searched === result.sender ? (
          <BsBoxArrowRight className="direction-icon" />
        ) : (
          <BsBoxArrowInRight className="direction-icon" />
        )}
      </div>
      <div>
        {opened && (
          <div>
            <div className="search-result-row-item">
              <h1>Comment: </h1>
              <p>{extractContent(result.content).comments}</p>
            </div>
            {extractContent(result.content).itemsList.map((item, key) => (
              <div key={key * 344} className="result-list-row">
                <div>{item.itemName}</div>

                <div className="contents-icons">
                  <div className="contents-quantity">
                    <span> {item.quantity} </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TransItem;
