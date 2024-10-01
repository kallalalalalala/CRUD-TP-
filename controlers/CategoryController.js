
// create category controle
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Category = require('../model/category');
exports.createCategory = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: "Content can not be empty!" });
    }

    try {
        const newCategory = new Category({ name });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Lister toutes les catégories

exports.listCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Modifier une catégorie

exports.updateCategory = async (req, res) => {
    const { id: _id } = req.params;
    const category = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({ message: "Category not found!" });
    }

    const updatedCategory = await Category.findByIdAndUpdate(_id, category, { new: true });

    if (!updatedCategory) {
        return res.status(404).json({ message: "Category not found!" });
    }

    res.json(updatedCategory);
};

// Supprimer une catégorie

exports.deleteCategory = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({ message: "Category not found!" });
    }

    const deletedCategory = await Category.findByIdAndDelete(_id);

    if (!deletedCategory) {
        return res.status(404).json({ message: "Category not found!" });
    }

    res.json({ message: "Category deleted successfully!" });
};





