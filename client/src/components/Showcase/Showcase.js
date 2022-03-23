import React, { useEffect, useState } from "react";
import { getfb } from "../../api/actions";
import "./Showcase.css";
import ShowcaseItems from "./ShowcaseItems";
import { useHorizontalScroll } from "./useSideScroll";
const Showcase = () => {
  const scrollRef = useHorizontalScroll();
  const [foodBanks, setFoodBanks] = useState([]);
  useEffect(() => {
    getfb()
      .then((res) => {
        setFoodBanks(res);
      })
      .catch((e) => {
        setFoodBanks(e);
      });
  }, []);

  return (
    <>
      <div ref={scrollRef} className="showcase-container">
        <ShowcaseItems foodbanks={foodBanks} />
      </div>
    </>
  );
};

export default Showcase;
