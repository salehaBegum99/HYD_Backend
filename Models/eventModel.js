// ✅ models/eventModel.js
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  event: String,
  comments: String
});

module.exports = mongoose.model("Event", eventSchema);
