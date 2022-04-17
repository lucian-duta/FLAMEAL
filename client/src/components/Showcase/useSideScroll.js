import { useRef, useEffect } from "react";

/**
 * The function used to enable horisontal scrolling on the showcase component
 * @category Showcase
 * @function useHorizontalScroll
 * @returns {RefObject} the refrence to be used in the component
 */
export function useHorizontalScroll() {
  //declaring the mutable ref object
  const elRef = useRef();
  useEffect(() => {
    //fetching the current ref from the component
    const el = elRef.current;
    if (el) {
      //function to enable the horizontal scroll
      const onWheel = (e) => {
        //if the scroll is not horizontal
        if (e.deltaY === 0) return;
        e.preventDefault();
        //if the scroll in the main component
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth",
        });
      };
      //adding the event listener on the mouse wheel
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}
