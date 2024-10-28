import { Router } from "express"; //import router from express

// import controller functions
import {
  createTransaction,
  getUserTransactions,
} from "../../controllers/transaction.js";

// create a router instance
const transactionRouter = Router();

// POST api/v1/transaction
transactionRouter.route("/").get(getUserTransactions).post(createTransaction);

// we export so that it can be available everywhere
export { transactionRouter };
