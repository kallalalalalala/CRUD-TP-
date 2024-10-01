const express = require('express');
require('dotenv').config();
require('./Db/db.js');
const app = express();
app.use(express.json());
port =  5000 ;

// Importation des routes
const Category = require('./route/catroute.js');
app.use('/api/', Category);
// Importation des routes

const Product = require('./route/prdroute.js');
app.use('/api/', Product);





//Demarage du server 
app.get('/', function (req, res) {
    res.send('Hello Amadou Tidiane Sow');
});
app.listen(port, (err) => {
    if (err) {
        console.error(`Error starting server: ${err}`);
        process.exit(1);
    }
    console.log(`Server running at http://localhost:${port}`);
});



    


