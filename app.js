require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multiparty = require("connect-multiparty");
const fileUpload = require("express-fileupload");

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

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

app.use("/", (req, res, next) => {
  res.send("Welcome to my app");
});

// swagger
const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "APIs",
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://localhost:${process.env.API_PORT}`,
      },
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: "apiKey",
          name: "Authorization",
          // scheme: "bearer",
          in: "header",
        },
        security: [
          {
            ApiKeyAuth: [],
          },
        ],
      },
    },
  },
  apis: ["routes/*.js", "model/*.js"],
};

const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

// Docs in JSON format
app.get("/docs.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(specs);
});

// Logic goes here

module.exports = app;
