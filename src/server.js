const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("Still Lonly");
});

module.exports = app;
