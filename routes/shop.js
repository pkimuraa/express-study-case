const express = require('express');
const Product = require('../models/product');
const { getAllProduct } = require('../controllers/product');
const router = express.Router();

router.get("/products", getAllProduct);

module.exports = router;