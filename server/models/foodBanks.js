import mongoose from "mongoose";

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
