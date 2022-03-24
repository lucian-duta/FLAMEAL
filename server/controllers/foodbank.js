import FoodBank from "../models/foodBanks.js";

export const getFB = async (req, res) => {
  try {
    const fb = await FoodBank.find();
    res.status(200).json(fb);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getOneFB = async (req, res) => {
  try {
    const fb = await FoodBank.findOne({ fbAddress: req.params.address });
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
  console.log(res.body);

  // *frontend payload
  // payload = {
  // name: null,
  // description: null,
  // address:null,
  // fbPic: null
  // }

  console.log("PROPOSED FB: ", fb);
  const newFB = new FoodBank(fb);

  try {
    await newFB.save();
    res.status(201).json(newFB);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateFb = async (req, res) => {
  const fb = {
    fbName: req.body.name,
    fbDescription: req.body.description,
    fbAddress: req.body.address,
    fbPic: req.body.pic,
  };
  console.log(res.body);

  // *frontend payload
  // payload = {
  // name: null,
  // description: null,
  // address:null,
  // fbPic: null
  // }

  console.log("PROPOSED FB: ", fb);

  try {
    let update = await FoodBank.updateOne(
      { fbAddress: fb.fbAddress },
      { fbDescription: fb.fbDescription, fbName: fb.fbName, fbPic: fb.fbPic }
    );
    if (update.acknowledged) {
      res.status(200).json("updated");
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
