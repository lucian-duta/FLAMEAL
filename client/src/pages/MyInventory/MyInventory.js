import React, { useContext } from "react";
import ListFill from "../../components/List/ListFill";
import { UserContext } from "../../context/UserContext";
import "./MyInventory.css";

/**
 * The component to be displayed in the MyInventory page
 * @borrows {@link ListFill} as a child component to handle the list of items
 * @returns {ReactComponent} the MyInventory component
 */
export default function MyInventory() {
  //get the user context
  const [state] = useContext(UserContext);
  //console.log(state);

  //pass te user context to the session storage
  sessionStorage.setItem("state", JSON.stringify(state));
  return (
    <div className="list-containter">
      <div className="list-app-inv">
        <h1>Add goods to the inventory</h1>
        <ListFill />
      </div>
    </div>
  );
}
