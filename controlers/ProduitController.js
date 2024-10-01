const express = require('express');
// controllers/ProductController.js
const Product = require('../model/produit');

exports.createProduct = async (req, res) => {
    const { name, price, categoryId } = req.body;

    try {
        const newProduct = new Product({ name, price, category: categoryId });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
