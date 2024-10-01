const express = require('express');

const router = express.Router();

const Product = require('../model/produit');

// Ajouter un produit

router.post('/pa', async (req, res) => {
    const { name, price, categoryId } = req.body;

    try {
        const newProduct = new Product({ name, price, category: categoryId });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Lister tous les produits

router.get('/pl', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Modifier un produit

router.patch('/pm/:id', async (req, res) => {
    const { id: _id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({ message: "Product not found!" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(_id, product, { new: true });

    if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found!" });
    }

    res.json(updatedProduct);
});

// Supprimer un produit

router.delete('/pd/:id', async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({ message: "Product not found!" });
    }

    const deletedProduct = await Product.findByIdAndDelete(_id);

    if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found!" });
    }

    res.json({ message: "Product deleted successfully!" });
});

module.exports = router;