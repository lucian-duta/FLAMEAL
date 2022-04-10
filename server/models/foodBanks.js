import mongoose from "mongoose";

/**
 * The schema of the food bank
 * @type {mongoose.Schema}
 */
const FBSchema = mongoose.Schema(
  {
    fbName: { type: String, required: true, unique: true, index: true },
    fbDescription: { type: String, required: true },
    fbAddress: { type: String, unique: true, required: true },
    fbPic: { type: String },
  },
  { collection: "food-banks", strict: true }
);

const FoodBank = mongoose.model("FoodBank", FBSchema);

export default FoodBank;
