import React from "react";
import ListFill from "../../components/List/ListFill";
import "./MyInventory.css";
/**
 * * MyInventory
 * * Used to manage user's inventory
 * TODO: Find a way to export the inventory to the transfer form, precisely list
 * @returns
 */
export default function MyInventory() {
  return (
    <div className="list-containter">
      <div className="list-app-inv">
        <h1>Add goods to the inventory</h1>
        <ListFill />
      </div>
    </div>
  );
}
