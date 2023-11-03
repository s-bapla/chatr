const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./database/db");
dotenv.config();
const userRoutes = require('./routes/userRoutes')


connectDatabase();

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use('/user', userRoutes)


app.listen(port, console.log(`listening on port ${port}`));
