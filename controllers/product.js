const Product = require("../models/product");

exports.addProduct = async (req, res, next) =>{

    const product = new Product(req.body.name, req.body.price);
    
    try{
        await product.save();
    } catch(err){
        res.status(500).json({ err})
    }

    res.status(200).json(req.body)
}

exports.getAllProduct = (req, res, next) => {
    const products = Product.findAll();
    res.status(200).json({products})
}