const express = require("express");
require("dotenv").config();

const port = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res));

app.listen(port, `listening on port ${port}`);
