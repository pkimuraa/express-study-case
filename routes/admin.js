const express = require("express");
const bodyParser = require("body-parser")
const Product = require('../models/product');
const { addProduct, deleteOne } = require("../controllers/product");

const router = express.Router();


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.post("/add-product",  addProduct);

router.delete('/delete-product/:id', deleteOne);

module.exports = router;