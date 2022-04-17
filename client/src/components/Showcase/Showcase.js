import React, { useEffect, useState } from "react";
import { getfb } from "../../api/actions";
import extractFeatures, { fetchRecMap } from "../../Web3/extractFeatures";
import "./Showcase.css";
import ShowcaseItems from "./ShowcaseItems";
import { useHorizontalScroll } from "./useSideScroll";

/**
 * The react component to display the showcase of foodbanks
 * @category Showcase
 * @component
 * @borrows {@link ShowcaseItems} as a child component to display the showcase items
 * @borrows {@link useHorizontalScroll} to handle the horizontal scroll
 * @returns {ReactCoponent}
 */
const Showcase = () => {
  //the horisontal scroll function reference
  const scrollRef = useHorizontalScroll();
  //hook used to holde the foodbanks to be displayed
  const [foodBanks, setFoodBanks] = useState([]);
  //hook to hold a map of transactions to be displayed in the foodbank card
  const [transactionMap, setTransactionMap] = useState();
  //when the component mounts
  useEffect(() => {
    //get the foodbanks from the api
    getfb()
      .then((res) => {
        //fetch the transactions for each foodbank from the blockchain
        extractFeatures().then(() => {
          setTransactionMap(fetchRecMap());
          setFoodBanks(res);
        });
      })
      .catch((e) => {
        setFoodBanks(e);
      });
  }, []);

  return (
    <>
      <div ref={scrollRef} className="showcase-container">
        <ShowcaseItems foodbanks={foodBanks} transMap={transactionMap} />
      </div>
    </>
  );
};

export default Showcase;
