import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    publicAddress: { type: String, required: true, unique: true },
    nonce: { type: String, required: true },
  },
  { collection: "user-data" }
);

const UserAccount = mongoose.model("UserSchema", UserSchema);

export default UserAccount;
