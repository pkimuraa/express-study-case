const express = require('express');
const Product = require('../models/product')
const router = express.Router();

router.post("/add-product", (req, res, next) => {
    const product = new Product('a', 'b ');

    product.save();

    res.status(200).json({message: 'success'})

});


module.exports = router;