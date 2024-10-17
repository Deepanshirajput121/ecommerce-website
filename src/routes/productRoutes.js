// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Ensure this path is correct

// GET request to fetch all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find(); // Mongoose se products fetch karein
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET request to fetch a single product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id); // Mongoose se product fetch karein
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
