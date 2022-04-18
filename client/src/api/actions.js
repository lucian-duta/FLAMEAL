import axios from "axios";
let url = "https://flameal.herokuapp.com/users";
let urlfb = "https://flameal.herokuapp.com/fb";

/**
 * Function used to handle the update of user's inventory in the database
 * @category API Calls
 * @function updateInventory
 * @param {Array<Object>} items - array of items to be sent to the database
 * @param {String} address - the address of the user holding the items
 * @returns {Promise<Object>} a promise that resolves to the response from the database or rejects with an error
 */
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
/**
 * Function used to check if the user exists in the database
 * @category API Calls
 * @function checkUser
 * @param {String} address - the address of the user to be checked
 * @returns {Promise<Object>} a promise that resolves to the response from the database or rejects with an error
 */
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

/**
 * Function used to create a new foodbank in the database
 * @category API Calls
 * @function createfb
 * @param {Object} fbData - the data of the foodbank to be sent to the database
 * @returns {Promise<Object>} a promise that resolves to the response from the database or rejects with an error if the foodbank already exists
 */
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

/**
 * Function used to update the foodbank's data in the database
 * @category API Calls
 * @function updateFb
 * @param {Object} fbData - the data of the foodbank to be sent to the database
 * @returns {Promise<Object>} a promise that resolves to the response from the database or rejects with an error
 */
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

/**
 * Function used to fetch all the foodbanks from the database
 * @category API Calls
 * @function getfb
 * @returns {Promise<Object>} a promise that resolves to the response from the database with all the foobanks found or rejects with an error
 */
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

/**
 * Function used to fecch only one foodbank from the database
 * @category API Calls
 * @function getOneFb
 * @param {String} address  the address of the foodbank to be fetched
 * @returns {Promise<Object>} a promise that resolves to the response from the database with the foodbank found or rejects with an error
 */
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
