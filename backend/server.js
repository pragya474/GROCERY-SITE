const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const products = [
  { id: 1, name: "Apples", price: 30 },
  { id: 2, name: "Milk", price: 45 },
  { id: 3, name: "Bread", price: 25 },
  { id: 4, name: "Eggs", price: 60 },
  { id: 5, name: "Tomatoes", price: 20 },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});
