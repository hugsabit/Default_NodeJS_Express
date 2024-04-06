///--------------------------------------------------------------///
/// Cette page sert à gérer les routes venants de /api/contact   ///
///--------------------------------------------------------------///

///---------------------------///
/// Déclaration des require   ///
///---------------------------///

const express = require('express');

const middleware = require('../middleware/test');
const contactCtrl = require('../controllers/conatct');

///-------------------------///
/// Déclaration de router   ///
///-------------------------///

const router = express.Router();

///-----------------------------------------------///
/// Déclaration des fonctions reliés aux routes   ///
///-----------------------------------------------///

router.post('/', middleware, contactCtrl.formsend);

///-------------------------------///
/// Export de router pour l'app   ///
///-------------------------------///

module.exports = router;