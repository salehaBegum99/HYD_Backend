// ✅ server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const uri = process.env.MONGODB_URI;
const app = express();
app.use(cors());
app.use(express.json());

// Routes
const volunteerRoutes = require("./Routes/volunteerRoute");
const eventRoutes = require("./Routes/eventRoute");
const partnerRoutes = require("./Routes/partnerRoute");
const awarenessRoutes = require("./Routes/awarenessRoute");

app.use("/api/volunteer", volunteerRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/partner", partnerRoutes);
app.use("/api/awareness", awarenessRoutes);

if (!uri) {
  console.error("Missing MONGODB_URI in environment");
  process.exit(1); // Stop if undefined
}

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
