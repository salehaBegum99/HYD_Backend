// ✅ models/volunteerModel.js
const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
  Fullname: String,
  email: String,
  phone: String,
  interests: String,

});

module.exports = mongoose.model("Volunteer", volunteerSchema);
