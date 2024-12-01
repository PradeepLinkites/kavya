require("dotenv").config();
const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Kavya");
});

app.get("/about", (req, res) => {
  res.send("Hello About");
});

app.get("/setting", (req, res) => {
  // res.send('<h2>Hello this is the setting page</h2>')
  res.status(200).json("oh noes!");
});

app.listen(process.env.PORT, () => {
  console.log("This app is runnning on PORT", process.env.PORT);
});
