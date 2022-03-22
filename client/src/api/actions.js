import axios from "axios";
import React, { useContext } from "react";
let url = "http://localhost:5000/users";

export const updateInventory = (items, address) => {
  return new Promise((resolve, reject) => {
    const payload = {
      publicAddress: address,
      inventory: items,
    };

    axios
      .post(`${url}/updateinventory`, payload)
      .then(() => {
        resolve();
      })
      .catch((e) => {
        reject();
      });
  });
};
