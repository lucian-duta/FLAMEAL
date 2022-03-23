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

export const checkUser = (address) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}/finduser/${address}`)
      .then((res) => {
        resolve(true);
        console.log("USER FOUND", res);
      })
      .catch((e) => {
        reject(false);
      });
  });
};
