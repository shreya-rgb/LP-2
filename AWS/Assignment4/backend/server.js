const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 👉 YAHAN APNA ATLAS CONNECTION STRING DALNA
mongoose.connect("YOUR_MONGODB_CONNECTION_STRING");

const Post = mongoose.model("Post", { title: String, content: String });

app.get("/", (req, res) => {
  res.send("Blog Backend running 🚀");
});

app.post("/add", async (req, res) => {
  const post = new Post({ title: req.body.title, content: req.body.content });
  await post.save();
  res.send("Post added");
});

app.listen(3000, () => console.log("Server running on port 3000"));