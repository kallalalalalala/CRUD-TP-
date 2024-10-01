/*creation de modele pour les category de produits

const mongoose = require('mongoose');

// Définir le schéma pour une catégorie de produit
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true, // Supprime les espaces inutiles
    },
    description: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Date de création par défaut
    },
});

// Définir le modèle pour les catégories de produits

// Créer le modèle à partir du schéma
const Category = mongoose.model('Category', categorySchema);

// Exporter le modèle

module.exports = Category;
*/
// models/Category.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Category', categorySchema);

