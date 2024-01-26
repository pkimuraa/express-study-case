const express = require("express");
const bodyParser = require("body-parser")
const Product = require('../models/product');
const { addProduct } = require("../controllers/product");

const router = express.Router();


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.post("/add-product",  addProduct);


module.exports = router;