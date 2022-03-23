import FoodBank from "../models/foodBanks.js";

export const getFB = async (req, res) => {
  try {
    const fb = await FoodBank.find();
    res.status(200).json(fb);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createFB = async (req, res) => {
  const fb = {
    fbName: req.body.name,
    fbDescription: req.body.description,
    fbAddress: req.body.address,
    fbPic: req.body.pic,
  };

  // *frontend payload
  // payload = {
  // name: null,
  // description: null,
  // address:null,
  // fbPic: null
  // }

  console.log("PROPOSED FB: ", fb);
  //!NEED TO CHECK IF EXISTS
  const newFB = new FoodBank(user);

  try {
    await newFB.save();
    res.status(201).json(newFB);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
