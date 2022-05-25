const Contato = require('../models/ContatoModel');

module.exports.index = async (req, res) => {
    const contatos = await Contato.buscaContatos();
    res.render('index', { contatos });
};