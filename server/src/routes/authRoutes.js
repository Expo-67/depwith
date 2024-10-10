import express from "express";

const router = express.Router();

router.post("/user", (req, res) => {
  res.json({ message: "authentication route is good bro!" });
});

export default router;
