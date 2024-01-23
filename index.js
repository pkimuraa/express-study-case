const express = require("express"),
  bodyParser = require("body-parser"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");

const dotenv = require("dotenv").config();
const dburl = process.env.DB_HOST;

const mongoose = require("mongoose");

const router = express.Router();

const app = express();

mongoose.connect(dburl);
const con = mongoose.connection;
app.use(express.json());
try {
  con.on("open", () => {
    console.log("connected");
  });
} catch (error) {
  console.log("Error: " + error);
}

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Express Api Docs",
      version: "0.1.0",
      description:
        "This is a simple API, e-commerce focused, application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "pkimuraa",
        url: "https://github.com/pkimuraa",
        email: "paulo.kimura94@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.json());

app.use("/", (req, res, next) => {
  next();
});

app.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.send("<h1> response </h1>");
});

app.get("/", (req, res, next) => {
  res.send("<h1> path: / </h1>");
});

app.listen(3000, () => console.log("running at 3000"));
