import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("Request response not found");
  res.send("Welcome to the JAMESS expo");
});
app.listen(3005, () => {
  console.log("Server is running in port 3005");
});
