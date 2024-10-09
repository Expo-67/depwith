import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  console.log("Request response not found");
  res.json({
    message: "Silence is golden",
  });
});
app.listen(3005, () => {
  console.log("Server is running in port 3005");
});
