import { model, Schema } from "mongoose";

const transactionSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const transaction = model("Transaction", transactionSchema);

export { Transaction };
