const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 👉 YAHAN APNA ATLAS CONNECTION STRING DALNA
mongoose.connect("YOUR_MONGODB_CONNECTION_STRING");

const User = mongoose.model("User", { name: String });

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.post("/add", async (req, res) => {
  const user = new User({ name: req.body.name });
  await user.save();
  res.send("User added");
});

app.listen(3000, () => console.log("Server running on port 3000"));