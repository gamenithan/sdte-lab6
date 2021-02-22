const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("why so lonely");
});

module.exports = app;
