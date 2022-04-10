import UserAccount from "../models/userAccount.js";
import jwt from "jsonwebtoken";

/**
 * Function used to generate a unique nonce to be asssigned to a user in the database.
 * The nonce is a 16 character string containing upper and lower case letters and numbers.
 * @returns {String} a uniquely generated nonce
 */
const nonceGenerator = () => {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 16; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

/**
 * Function used to find a user in the database based on the address.
 * @param {Object} req the request object from the front end
 * @param {Object} res the response object from the server
 */
export const findUser = async (req, res) => {
  try {
    const address = req.params.address;
    console.log("attempt to find user: ", address);
    const usr = await UserAccount.findOne({ publicAddress: address });
    console.log("RESULT", usr);
    if (!usr) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(200).json(usr);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * Function used to update the inventory of a user in the database.
 * @param {Object} req the request object from the front end
 * @param {Object} res the response object from the server
 */
export const updateInventory = async (req, res) => {
  const address = req.body.publicAddress;
  const inv = JSON.stringify(req.body.inventory);
  console.log("new inventory: ", inv);
  console.log("address: ", address);
  try {
    let update = await UserAccount.updateOne(
      { publicAddress: address },
      { inventory: inv }
    );
    if (update.acknowledged) {
      res.status(200).json("updated");
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * Function used to fetch the inventory of a user in the database.
 * @param {Object} req the request object from the front end
 * @param {Object} res the response object from the server
 */
export const getInventory = async (req, res) => {
  try {
    let user = await UserAccount.findOne({ publicAddress: req.params.address });
    console.log("getInventory: ", user);
    res.status(200).json(user.inventory);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * Function used to create a user in the database.
 * @param {Object} req the request object from the front end
 * @param {Object} res the response object from the server
 */
export const createUser = async (req, res) => {
  const user = {
    publicAddress: req.body.publicAddress,
    nonce: nonceGenerator(),
    name: req.body.name,
    isFoodBank: req.body.isFoodBank,
    inventory: "",
  };

  console.log("PROPOSED USER: ", user);
  const newUser = new UserAccount(user);

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

/**
 * Function used to login the user and compare the address provided with the address in the database.
 * @param {Object} req the request object from the front end
 * @param {Object} res the response object from the server
 */
export const loginUser = async (req, res) => {
  const body = req.params;
  console.log("login user: ", body);
  try {
    let user = await UserAccount.findOne({ publicAddress: body.address });
    // const token = jwt.sign({ publicAddress: body.publicAddress }, "secret123");
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * Function used to authenticate the user by comparing the address provided with the address in the database.
 *
 * If the function is called the nonce is changed regardless of whether the user is authenticated or not.
 * @param {Object} req the request object from the front end
 * @param {Object} res the response object from the server
 */
export const authUser = async (req, res) => {
  const address = req.body.address;
  const decodedAddress = req.body.decodedAdd;
  console.log("actual address: ", address);
  console.log("decoded address: ", decodedAddress);
  try {
    //attempt to find the user in the database
    let user = await UserAccount.findOne({ publicAddress: address });
    //if the user is found change the address from database to lowercase
    let testAdd = user.publicAddress.toLowerCase();
    console.log("testAdd: ", testAdd);
    //if the address in the database is the same as the address provided
    if (decodedAddress === testAdd) {
      console.log(testAdd);
      //change the nonce in the database
      let update = await UserAccount.updateOne(
        { publicAddress: address },
        { nonce: nonceGenerator() }
      );
      //if the update was successful send the token to the user
      if (update.acknowledged) {
        const token = jwt.sign(
          { publicAddress: user.publicAddress },
          "secret123"
        );
        res.status(200).json(token);
      }
    } else {
      res.status(404).json("failed");
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
