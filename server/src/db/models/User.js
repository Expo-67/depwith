import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true, //Validator
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: string,
      required: true, //Validator
    },
  },
  { timestamps: true }
);
const user = model("User", userSchema); // the model takes the name of your collection

export { User };
