/*const mongoose = require('mongoose');
// creation d'un schema pour les produit 



const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: false },
    image: { type: String, required: true }
});

// creation d'un model pour les produits avec le schema

const Product = mongoose.model('Product', productSchema);

module.exports = Product;*/
// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
});

module.exports = mongoose.model('Product', productSchema);
