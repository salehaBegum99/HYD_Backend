// ✅ routes/partnerRoutes.js
const express = require("express");
const router = express.Router();
const Partner = require("../Models/partnerModel");

router.post("/", async (req, res) => {
  try {
    const newPartner = new Partner(req.body);
    await newPartner.save();
    res.status(201).json({ message: "Partner request saved" });
  } catch (err) {
    res.status(500).json({ message: "Error saving partner", error: err });
  }
});

module.exports = router;
