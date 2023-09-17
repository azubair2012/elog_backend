const express = require("express");
const app = express();
const dotenv = require("dotenv").config(); // to use.env file for environment variables.
const port = process.env.PORT;
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDb = require("./config/dbConnection");
const postRoute = require("./routers/postRoute");
const getRoute = require("./routers/getRoute");
const deleteRoute = require("./routers/deleteRoute");
const updateRoute = require("./routers/updateRoute");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

app.use("/", postRoute);
app.use("/", getRoute);
app.use("/", deleteRoute);
app.use("/", updateRoute);

connectDb();
app.listen(port || 5000);
