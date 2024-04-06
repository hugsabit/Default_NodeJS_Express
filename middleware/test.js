///-------------------------------------------------///
/// Cette page sert à gérer un middleware de test   ///
///-------------------------------------------------///

///--------------------------------///
/// Export du try/catch du token   ///
///--------------------------------///

module.exports = (req, res, next) => {
    console.log('execution of middleware');
    next();
};