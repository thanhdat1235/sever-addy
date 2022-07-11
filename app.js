require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multiparty = require("connect-multiparty");
const fileUpload = require("express-fileupload");

const app = express();

app.use(
  fileUpload({
    createParentPath: true,
  })
);

const corsOptions = {
  origin: "*",
  exposedHeaders: "Authorization",
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "50mb" }));

app.use(bodyParser.json({ limit: "50mb" }));

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 100000000,
  })
);

app.use(express.static("files-upload"));

app.use("/images", express.static("images"));

app.use(express.json());

// Logic goes here

module.exports = app;
