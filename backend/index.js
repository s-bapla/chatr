const express = require("express");
require("dotenv").config();

const port = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
    res.send("hello world")
});

app.get("/", (req, res) => {
  res.send("hello world");
});


app.listen(port, console.log(`listening on port ${port}`));
