import React from "react";
import "./Showcase.css";
import ShowcaseItems from "./ShowcaseItems";
import { useHorizontalScroll } from "./useSideScroll";
const Showcase = () => {
  const scrollRef = useHorizontalScroll();

  return (
    <>
      <div ref={scrollRef} className="showcase-container">
        <ShowcaseItems />
      </div>
    </>
  );
};

export default Showcase;
