import React, { useEffect, useState } from "react";
import { getfb } from "../../api/actions";
import extractFeatures, { fetchRecMap } from "../../Web3/extractFeatures";
import "./Showcase.css";
import ShowcaseItems from "./ShowcaseItems";
import { useHorizontalScroll } from "./useSideScroll";
const Showcase = () => {
  const scrollRef = useHorizontalScroll();
  const [foodBanks, setFoodBanks] = useState([]);
  const [transactionMap, setTransactionMap] = useState();
  useEffect(() => {
    getfb()
      .then((res) => {
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
