// ✅ routes/eventRoutes.js
const express = require("express");
const router = express.Router();
const Event = require("../Models/eventModel");

router.post("/", async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json({ message: "Event registration saved" });
  } catch (err) {
    res.status(500).json({ message: "Error saving event", error: err });
  }
});

module.exports = router;
