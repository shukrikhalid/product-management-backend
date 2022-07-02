const Product = require('../models/product')

const productController = {
    index: async (req, res) => {
        Product.find({}, (err, products) => {
            if (err) return res.status(400).json({ status:false, message:`Get products error`});
            res.json({ status:true, message:"List products", products})
        })
    },
    show: async (req, res) => {
        Product.findById(req.params.id, (err, product) => {
            if (err) return res.status(400).json({ status:false, message:`Product id: ${req.params.id} is not found`});
            if (!product) return res.status(400).json({ status:false, message:`Product id: ${req.params.id} is not found`});
            res.json({ status:true, message:"Get product", product})
        })
    },
    create: async (req, res) => {
        var product = new Product(
            {
                name: req.body.name,
                quantity: req.body.quantity
            }
        );
    
        product.save((err, product) => {
            if (err) return res.status(400).json({ status:false, message:`Product id: ${req.params.id} is not found`});
            res.json({ status:true, message:"Create product", product})
        })
    },
    update: async (req, res) => {
        Product.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, product) => {
            if (err) return res.status(400).json({ status:false, message:`Product id: ${req.params.id} is not found`});
            res.json({ status:true, message:"Update product", product})
        })
    },
    remove: async (req, res) => {
        Product.findByIdAndRemove(req.params.id, (err, product) => {
            if (err) return res.status(400).json({ status:false, message:`Product id: ${req.params.id} is not found`});
            res.json({ status:true, message:"Delete product", product})
        })
    }
}

module.exports = productController