import FoodBank from "../models/foodBanks.js";

/**
 * Function used to fetch the food banks from the database
 * @category REST API
 * @function getFoodBanks
 * @param {Object} res the response object from the server
 */
export const getFB = async (req, res) => {
  try {
    const fb = await FoodBank.find();
    res.status(200).json(fb);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * Function used to fetch one food bank from the database
 * @category REST API
 * @function getOneFb
 * @param {Object} req the request object from the front end
 * @param {Object} res the response object from the server
 */
export const getOneFB = async (req, res) => {
  try {
    const fb = await FoodBank.findOne({ fbAddress: req.params.address });
    res.status(200).json(fb);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * Function used to create a food bank in the database
 * @category REST API
 * @function createFb
 * @param {Object} req the request object from the front end
 * @param {Object} res the response object from the server
 */
export const createFB = async (req, res) => {
  const fb = {
    fbName: req.body.name,
    fbDescription: req.body.description,
    fbAddress: req.body.address,
    fbPic: req.body.pic,
  };
  console.log(res.body);
  console.log("PROPOSED FB: ", fb);
  const newFB = new FoodBank(fb);

  try {
    await newFB.save();
    res.status(201).json(newFB);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

/**
 * Function used to update one food bank in the database
 * @category REST API
 * @function updateFB
 * @param {Object} req the request object from the front end
 * @param {Object} res the response object from the server
 */
export const updateFb = async (req, res) => {
  const fb = {
    fbName: req.body.name,
    fbDescription: req.body.description,
    fbAddress: req.body.address,
    fbPic: req.body.pic,
  };
  console.log(res.body);

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
