import UserAccount from "../models/userAccount.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import buffer from "buffer";
const nonceGenerator = () => {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 16; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const getUsers = async (req, res) => {
  try {
    const user = await UserAccount.find();
    console.log("Users fetched: ", user);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
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

export const getInventory = async (req, res) => {
  try {
    let user = await UserAccount.findOne({ publicAddress: req.params.address });
    console.log("getInventory: ", user);
    res.status(200).json(user.inventory);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const user = {
    publicAddress: req.body.publicAddress,
    nonce: nonceGenerator(),
    name: "",
    inventory: "",
  };
  //!NEED TO CHECK IF EXISTS
  const newUser = new UserAccount(user);

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  const body = req.params;
  console.log("login user: ", body);
  try {
    let user = await UserAccount.findOne({ publicAddress: body.address });
    // const token = jwt.sign({ publicAddress: body.publicAddress }, "secret123");
    res.status(200).json(user.nonce);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const authUser = async (req, res) => {
  const address = req.body.address;
  const decodedAddress = req.body.decodedAdd;
  console.log("actual address: ", address);
  console.log("decoded address: ", decodedAddress);
  try {
    let user = await UserAccount.findOne({ publicAddress: address });
    let testAdd = user.publicAddress.toLowerCase();
    console.log("testAdd: ", testAdd);
    if (decodedAddress === testAdd) {
      console.log(testAdd);
      let update = await UserAccount.updateOne(
        { publicAddress: address },
        { nonce: nonceGenerator() }
      );
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
