const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { productsRoute } = require('./routes');  // Routes import karte hain

dotenv.config();  // Load environment variables

const app = express();
app.use(cors());
app.use(express.json()); // To parse incoming JSON data

// Define Routes
app.use('/api/search', productsRoute);  // Main endpoint '/api/search'

// Basic check
app.get('/', (req, res) => {
  res.send('API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
