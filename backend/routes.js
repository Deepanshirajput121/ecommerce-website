const express = require('express');
const app = express();
const cors = require('cors');

// Mock Inventory Database
const mockInventory = [
    { name: "Laptop", price: "$1200", link: "/images/laptop.jpg" },
    { name: "Smartphone", price: "$800", link: "/images/smartphone.jpg" },
    { name: "Headphones", price: "$150", link: "/images/headphones.jpg" },
    { name: "Keyboard", price: "$100", link: "/images/keyboard.jpg" },
    { name: "Monitor", price: "$300", link: "/images/monitor.jpg" },
    { name: "Handbag", price: "$2000", link: "/images/handbag.jpg" },
    { name: "Sunglasses", price: "$100", link: "/images/sunglasses.jpg" },
    { name: "Jeans", price: "$3000", link: "/images/jeans.jpg" },
];

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API for searching products
app.post('/search', (req, res) => {
    const { query } = req.body;

    if (!query) {
        console.log("Search request without query received.");
        return res.status(400).json({ message: "Query is required" });
    }

    const queryLowercase = query.trim().toLowerCase();
    console.log("Search query:", queryLowercase);

    const matchingProducts = mockInventory.filter(product =>
        product.name.toLowerCase().includes(queryLowercase)
    );

    if (matchingProducts.length > 0) {
        console.log(`Found ${matchingProducts.length} matching products.`);
        res.status(200).json(matchingProducts);
    } else {
        console.log("No matching products found.");
        res.status(404).json({ message: "No products found." });
    }
});

// Start server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
