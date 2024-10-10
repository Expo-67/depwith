import { model, Schema } from "mongoose";

const balanceSchema = new Schema(
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
const balance = model("Balance", balanceSchema);

export { Balance };
