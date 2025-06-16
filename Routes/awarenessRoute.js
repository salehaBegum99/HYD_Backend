// ✅ routes/awarenessRoutes.js
const express = require("express");
const router = express.Router();
const Awareness = require("../Models/awarenessModel");

router.post("/", async (req, res) => {
  try {
    const newAwareness = new Awareness(req.body);
    await newAwareness.save();
    res.status(201).json({ message: "Awareness intent saved" });
  } catch (err) {
    res.status(500).json({ message: "Error saving awareness intent", error: err });
  }
});

module.exports = router;
