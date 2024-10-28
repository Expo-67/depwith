import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import { v1Router } from "./routes/v1/index.js";
import { v2Router } from "./routes/v2/index.js";
import cookieParser from "cookie-parser"; // parses cookies attached to the client request object

dotenv.config(); // Load environment variables from .env

// Connect to the database
connectDB();

const PORT = process.env.PORT;
// Initialize the app first
const app = express();

// Middleware: Allows parsing JSON requests
app.use(express.json());

// reads the Cookie header from incoming requests.
app.use(cookieParser());

// Routes:

app.use("/api/v1", v1Router);
app.use("/api/v2", v2Router);

// Root route for testing the server
app.get("/", (req, res) => {
  console.log("Request response not found");
  res.json({
    message: "Silence is golden",
  });
});

// END ROUTES: sets up a catch-all route to handle all
// incoming requests that dont much the defined routes

app.use("*", (req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

// Start the server
app.listen(3005, () => {
  console.log("Server is running on port 3005");
});
