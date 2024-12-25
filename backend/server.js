// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection (replace with your MongoDB URI)
mongoose.connect('mongodb://localhost:27017/productdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define the Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  image: String,
  link: String
});

const Product = mongoose.model('Product', productSchema);

// Route to get products based on query
app.post('/search', async (req, res) => {
  const { query } = req.body;
  try {
    const results = await Product.find({
      name: { $regex: query, $options: 'i' }
    });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
