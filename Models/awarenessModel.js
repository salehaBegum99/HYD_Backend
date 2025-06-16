// ✅ models/awarenessModel.js
const mongoose = require("mongoose");

const awarenessSchema = new mongoose.Schema({
  name: String,
  platform: String
});

module.exports = mongoose.model("Awareness", awarenessSchema);
