const express = require("express");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();

const mongoDB = require("./database/MongoDBConnect");
mongoDB.connectDB();

const corsMiddleware = require("./middleware/CorsMiddleware");
corsMiddleware.setHeaders(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

app.use(require("./routes"));
app.listen(process.env.SERVER_PORT, () =>
  console.log("Server started on " + process.env.SERVER_PORT)
);
