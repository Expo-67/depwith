import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import authRoute from "./routes/authRoutes.js";
import transactionRoute from "./routes/transactionRoute.js";
import balanceRoute from "./routes/balanceRoutes.js";

dotenv.config(); // Load environment variables from .env

// Initialize the app first
const app = express();

// Middleware: Allows parsing JSON requests
app.use(express.json());

// Routes: Use the authRoute
app.use("/auth", authRoute);
app.use("/transaction", transactionRoute);
app.use("/balance", balanceRoute);

// Connect to the database
connectDB();

// Root route for testing the server
app.get("/", (req, res) => {
  console.log("Request response not found");
  res.json({
    message: "Silence is golden",
  });
});

// Start the server
app.listen(3005, () => {
  console.log("Server is running on port 3005");
});
