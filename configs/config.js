
const mongoose = require('mongoose');


mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connecté à MongoDB avec succès !");
    })
    .catch((err) => {
        console.error("Erreur de connexion à MongoDB :", err);
    });


// exporter la conncexion 

module.exports = mongoose;

