// Sample Express.js Backend
const express = require('express');
const app = express();

app.use(express.json());

// Assuming an inventory is like:
const inventory = [
    { name: "Product 1", price: "$10", link: "https://example.com/product1" },
    { name: "Product 2", price: "$20", link: "https://example.com/product2" },
    { name: "Product 3", price: "$30", link: "https://example.com/product3" },
    // More products...
];

// Search route to return products matching the user's query
app.post('/search', (req, res) => {
    const { query } = req.body;
    const results = inventory.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    res.json(results);
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
