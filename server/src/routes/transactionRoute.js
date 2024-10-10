import express from "express";

const router = express.Router();

router.post("/trans", (req, res) => {
  res.json({ message: "transaction route is good bro, lets go!" });
});

export default router;
