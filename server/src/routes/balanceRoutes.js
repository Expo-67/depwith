import express from "express";

const router = express.Router();

router.post("/bal", (req, res) => {
  res.json({ message: "balance route is good bro, lets go!" });
});

export default router;
