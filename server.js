// server.js
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes'); // Import the product routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Use product routes
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); // Corrected line
