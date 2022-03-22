import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    publicAddress: { type: String, required: true, unique: true, index: true },
    nonce: { type: String, required: true },
    name: { type: String },
    inventory: { type: String },
  },
  { collection: "user-data", strict: true }
);

const UserAccount = mongoose.model("UserSchema", UserSchema);

export default UserAccount;
