import { Router } from "express";

//middleware imports
import { requiresAuthentication } from "../../middleware/auth.js";

//router imports
import { authRouter } from "./auth.js";
import { balanceRouter } from "./balance.js";
import { transactionRouter } from "./transaction.js";

const v1Router = Router();

// PUBLIC ROUTES (do not require a user to be logged in in order to access them)
// /api/v1
v1Router.get("/", (req, res) => {
  res.send("Hello from v1");
});

// /api/v1/auth
v1Router.use("/auth", authRouter);

//Private Routes they require user to be logged in in order to access them
v1Router.use(requiresAuthentication); // This middleware protects ALL routes after it

// /api/v1/balance
v1Router.use("/balance", balanceRouter);

// /api/v1/transaction
v1Router.use("/transaction", transactionRouter);

v1Router.get("/protected", (req, res) => {
  res.json({
    message: "This is a protected route",
  });
});
export { v1Router };
