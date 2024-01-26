

const express = require("express"),
  bodyParser = require("body-parser"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


const app = express();


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


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use('/admin/', adminRoutes);

app.use('/shop/', shopRoutes);

app.use(express.json());

app.use("/", (req, res, next) => {
  next();
});




app.listen(3000, () => console.log("running at 3000"));
