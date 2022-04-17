import React, { useEffect, useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { BsBoxArrowInRight, BsBoxArrowRight } from "react-icons/bs";
import "./TransItem.css";
const TransItem = ({ result, index, searched }) => {
  console.log(searched);

  const extractDate = (timestamp) => {
    var options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    console.log(new Date(timestamp).toLocaleDateString("en-US"));
    return new Date(timestamp * 1000).toLocaleDateString("en-GB", options);
  };

  const extractContent = (content) => {
    const contentObj = JSON.parse(content);
    return contentObj;
  };
  const [opened, setOpened] = useState(false);
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
