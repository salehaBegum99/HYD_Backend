const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
  organization: String,
  contactPerson: String,
  email: String,
  proposal: String,
});

module.exports = mongoose.model("Partner", partnerSchema);
