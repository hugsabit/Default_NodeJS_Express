///-------------------------------------------------------------///
/// Cette page sert à gérer les routes pricipales du serveurs   ///
///-------------------------------------------------------------///

///---------------------------///
/// Déclaration des require   ///
///---------------------------///

const express = require('express');
const contact = require('./routes/contact')

///------------------------///
/// Déclaration de l'app   ///
///------------------------///

const app = express();

///-------------------------------------------------///
/// Déclaration des entêtes des requêtes reponses   ///
///-------------------------------------------------///

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

///--------------------------------------------///
/// Déclaration des routes pour les requêtes   ///
///--------------------------------------------///

app.use(express.json());

app.use((req, res, next) => {
    console.log('a request as been received')
    next();
})

app.use('/api/contact', contact);

///-----------------------------------///
/// Export de l'app pour le serveur   ///
///-----------------------------------///

module.exports = app;