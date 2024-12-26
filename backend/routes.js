const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Mock Inventory Database
const mockInventory = [
    { name: "Laptop", price: "$1200", link: "/images/lap.jpg" },
    { name: "Smartphone", price: "$800", link: "#smartphone" },
    { name: "Headphones", price: "$150", link: "#headphones" },
    { name: "Keyboard", price: "$100", link: "#keyboard" },
    { name: "Monitor", price: "$300", link: "#monitor" },
    { name: "Women's Handbag", price: "$2000", link: "#monitor" },
    { name: "Sunglasses", price: "$100", link: "#monitor" },
    { name: "Jeans", price: "$3000", link: "#monitor" },
];

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// API for searching products
app.post('/search', (req, res) => {
    const { query } = req.body;
    const queryLowercase = query.toLowerCase();
    const matchingProducts = mockInventory.filter(product =>
        product.name.toLowerCase().includes(queryLowercase)
    );
    
    if (matchingProducts.length > 0) {
        res.json(matchingProducts);
    } else {
        res.json({ message: "No products found." });
    }
});

// Start server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
