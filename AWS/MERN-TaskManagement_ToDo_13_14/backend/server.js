const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 👉 YAHAN APNA ATLAS CONNECTION STRING DALNA
mongoose.connect("YOUR_MONGODB_CONNECTION_STRING");

const Task = mongoose.model("Task", { title: String, completed: Boolean });

app.get("/", (req, res) => {
  res.send("Task Manager Backend running 🚀");
});

// CREATE
app.post("/add-task", async (req, res) => {
  const task = new Task({ title: req.body.title, completed: false });
  await task.save();
  res.send("Task added");
});

// READ
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// UPDATE
app.put("/update-task/:id", async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, { completed: req.body.completed });
  res.send("Task updated");
});

// DELETE
app.delete("/delete-task/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send("Task deleted");
});

app.listen(3000, () => console.log("Server running on port 3000"));