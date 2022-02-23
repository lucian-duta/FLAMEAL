import React from "react";
import Listv2Fill from "../../components/Listv2Beta/Listv2Fill";
import "./MyInventory.css";

export default function MyInventory() {
  return (
    <div className="list-containter">
      <div className="list-app-inv">
        <h1>Add goods to the inventory</h1>
        <Listv2Fill />
      </div>
    </div>
  );
}
