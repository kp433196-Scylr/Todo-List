const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

mongoose.connect("mongodb://127.0.0.1:27017/todoDB")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error.message);
  });

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});