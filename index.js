require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT

app.get("/", (req, res) => {
  res.send("Hello Kavya");
});

app.get("/about", (req, res) => {
  res.send("Hello About");
});

app.get("/setting", (req, res) => {
  res.status(200).json("oh noes!");
});

app.listen(PORT, () => {
  console.log("This app is runnning on PORT", PORT);
});
