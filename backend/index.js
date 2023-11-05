const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./database/db");
dotenv.config();
const userRoutes = require('./routes/userRoutes')
const {routeNotFound, errorHandler} = require('./middleware/error')
const cors = require('cors')



connectDatabase();

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/user', userRoutes)
app.use(routeNotFound);
app.use(errorHandler);


app.listen(port, console.log(`listening on port ${port}`));
