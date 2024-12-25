const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 100, index: true },
    description: { type: String, required: true, minlength: 10, maxlength: 500 },
    price: { 
        type: Number, 
        required: true, 
        default: 0,
        validate: {
            validator: (value) => value >= 0,
            message: 'Price must be a positive number',
        }
    },
    image: { 
        type: String, 
        required: true, 
        match: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
    },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
