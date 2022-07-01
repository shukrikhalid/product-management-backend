const { param } = require('express/lib/request')
const Product = require('../models/product')

const productController = {
    index: (req, res) => {
        const products = Product.list()
        res.json({ status:true, message:"List products", products })
    },
    show: (req, res) => {
        const product = Product.find(req.params.id)
        if(!product){
            return res.status(400).json({ status:false, message:`Product id: ${req.params.id} is not found`})
        }
        res.json({ status:true, message:"Get product", product})
    },
    create: (req, res) => {
        const product = Product.create(req.body)
        res.json({ status:true, message:"Create product", product })
    },
    update: (req, res) => {
        const params = {
            id: req.params.id,
            ...req.body
        }
        const product = Product.update(params.id,params)
        if(!product){
            return res.status(400).json({ status:false, message:`Product id: ${params.id} is not found`})
        }
        res.json({ status:true, message:"Update product", product})
    },
    remove: (req, res) => {
        const params = {
            id: req.params.id,
            ...req.body
        }
        const product = Product.delete(params.id)
        if(!product){
            return res.status(400).json({ status:false, message:`Product id: ${params.id} is not found`})
        }
        res.json({ status:true, message:"Delete product", product})
    }
}

module.exports = productController