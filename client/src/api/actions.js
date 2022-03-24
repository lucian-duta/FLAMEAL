import axios from "axios";
import React, { useContext } from "react";
let url = "http://localhost:5000/users";
let urlfb = "http://localhost:5000/fb";
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

export const createfb = (fbData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${urlfb}/createfb`, fbData)
      .then((res) => {
        resolve(true);
        console.log("foodbank created", res);
      })
      .catch((e) => {
        reject(false);
      });
  });
};
export const updateFb = (fbData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${urlfb}/updatefb`, fbData)
      .then((res) => {
        resolve(true);
        console.log("foodbank updated", res);
      })
      .catch((e) => {
        reject(false);
      });
  });
};

export const getfb = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${urlfb}/getfb`)
      .then((res) => {
        resolve(res.data);
        console.log("foodbanks: ", res.data);
      })
      .catch((e) => {
        reject([]);
      });
  });
};

export const getOneFb = (address) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${urlfb}/getonefb/${address}`)
      .then((res) => {
        resolve(res.data);
        console.log("foodbanks: ", res.data);
      })
      .catch((e) => {
        reject(null);
      });
  });
};
