// ✅ routes/volunteerRoutes.js
const express = require("express");
const router = express.Router();
const Volunteer = require("../Models/volunteerModel");

router.post("/", async (req, res) => {
  try {
    const newVolunteer = new Volunteer(req.body);
    await newVolunteer.save();
    res.status(201).json({ message: "Volunteer saved successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error saving volunteer", error: err });
  }
});

module.exports = router;
