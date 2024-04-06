///--------------------------------------------------------------------------------///
/// Cette page sert à gérer les fonctions de controles en rapport avec les users   ///
///--------------------------------------------------------------------------------///

///----------------------------------///
/// Export de la fonction formsend   ///
///----------------------------------///

exports.formsend = (req, res, next) => {
    //le code souhaitez pour le formulaire
    console.log('code in formsend as been execute');
    res.status(201).send({ message: 'The request has been processed' });
};