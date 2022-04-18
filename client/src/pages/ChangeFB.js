import React from "react";
import EditFoodBank from "../components/EditFoodBank/EditFoodBank";

/**
 * React component to display the edit food bank page
 * @category Edit Foodbank
 * @component
 * @borrows {@link EditFoodBank} as a child component to display the edit food bank element
 * @returns {ReactComponent} the edit food bank component
 */
const ChangeFB = () => {
  return (
    <>
      <EditFoodBank />
    </>
  );
};

export default ChangeFB;
