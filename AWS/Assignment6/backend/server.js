const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 👉 YAHAN APNA ATLAS CONNECTION STRING DALNA
mongoose.connect("mongodb+srv://shreya:Shreya@123@clusterccmern.yfhjrqk.mongodb.net/?retryWrites=true&w=majority&appName=ClusterCCMern");

const Product = mongoose.model("Product", { name: String, price: Number });

app.get("/", (req, res) => {
  res.send("E-Commerce Backend running 🚀");
});

// CREATE Product (For Admin/Setup)
app.post("/add-product", async (req, res) => {
  const product = new Product({ name: req.body.name, price: req.body.price });
  await product.save();
  res.send("Product added");
});

// READ Products (For Users to browse)
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// SIMULATE PURCHASE
app.post("/buy/:id", async (req, res) => {
  // In a real app, this would process payment and update inventory.
  res.send({ message: "Purchase successful!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));