const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 👉 YAHAN APNA ATLAS CONNECTION STRING DALNA
mongoose.connect("YOUR_MONGODB_CONNECTION_STRING");

const Attendee = mongoose.model("Attendee", { name: String, email: String });

app.get("/", (req, res) => {
  res.send("Event Registration Backend running 🚀");
});

// CREATE (Register)
app.post("/register", async (req, res) => {
  const attendee = new Attendee({ name: req.body.name, email: req.body.email });
  await attendee.save();
  res.send("Successfully Registered");
});

// READ (List Attendees)
app.get("/attendees", async (req, res) => {
  const attendees = await Attendee.find();
  res.json(attendees);
});

app.listen(3000, () => console.log("Server running on port 3000"));