// ✅ server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

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

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
