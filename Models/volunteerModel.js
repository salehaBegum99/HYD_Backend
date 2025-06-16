// ✅ models/volunteerModel.js
const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  availability: String,
  skills: String,
  motivation: String,
});

module.exports = mongoose.model("Volunteer", volunteerSchema);
