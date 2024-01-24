const express = require("express"),
  bodyParser = require("body-parser"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");

  const adminRoutes = require('./routes/admin');
  const shopRoutes = require('./routes/shop');
/* const sqlite3 = require('sqlite3').verbose()


const db = require("./database.js")
 */


/* const mongoose = require("mongoose"); */



const app = express();

/* mongoose.connect(dburl);
const con = mongoose.connection;
app.use(express.json());
try {
  con.on("open", () => {
    console.log("connected");
  });
} catch (error) {
  console.log("Error: " + error);
}
 */

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

app.use('/admin/', adminRoutes);

app.use('/shop/', shopRoutes);

app.use(express.json());

app.use("/", (req, res, next) => {
  next();
});




app.listen(3000, () => console.log("running at 3000"));
