const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 👉 YAHAN APNA ATLAS CONNECTION STRING DALNA
mongoose.connect("YOUR_MONGODB_CONNECTION_STRING");

const Student = mongoose.model("Student", { name: String, rollNo: String, grade: String });

app.get("/", (req, res) => {
  res.send("Student Backend running 🚀");
});

// CREATE
app.post("/add", async (req, res) => {
  const student = new Student({ name: req.body.name, rollNo: req.body.rollNo, grade: req.body.grade });
  await student.save();
  res.send("Student added");
});

// READ
app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// UPDATE
app.put("/update/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, { grade: req.body.grade });
  res.send("Student updated");
});

app.listen(3000, () => console.log("Server running on port 3000"));