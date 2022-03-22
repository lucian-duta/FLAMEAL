import React, { useContext } from "react";
import ListFill from "../../components/List/ListFill";
import { UserContext } from "../../context/UserContext";
import "./MyInventory.css";
/**
 * * MyInventory
 * * Used to manage user's inventory
 * TODO: Find a way to export the inventory to the transfer form, precisely list
 * @returns
 */
export default function MyInventory() {
  const [state, dispach] = useContext(UserContext);
  console.log(state);
  localStorage.setItem("state", JSON.stringify(state));
  return (
    <div className="list-containter">
      <div className="list-app-inv">
        <h1>Add goods to the inventory</h1>
        <ListFill />
      </div>
    </div>
  );
}
