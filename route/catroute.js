
const express = require('express');

const router = express.Router();

const Category = require('../controlers/CategoryController');

// Ajouter une catégorie
router.post('/c', Category.createCategory);

// Lister toutes les catégories

router.get('/cl', Category.listCategories);

// Modifier une catégorie

router.put('/c/m/:id', Category.updateCategory);

// Supprimer une catégorie

router.delete('/c/d/:id', Category.deleteCategory);

module.exports = router;



