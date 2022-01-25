const Smartphone = require('../models/smartphones.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Ola!, Seja Bem Vindos ao App SmartPhones.');
};
//Adicionar smartphone à BD
exports.create = function (req, res) {
    var smartphone = new Smartphone();

    smartphone.nome = req.body.nome;
    smartphone.marca = req.body.marca;
    smartphone.price = req.body.price;

    smartphone.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Registo de Smartphone criado com sucesso')
    });
};

exports.details = function (req, res) {
    Smartphone.findById(req.params.id, function (err, smartphone) {
        if (err) return next(err);
        res.send(smartphone);
    })
};

exports.update = function (req, res) {
    Smartphone.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, smartphone) {
        if (err) return next(err);
        res.send('Smartphone udpated successfully!!.');
    });
};

exports.delete = function (req, res) {
    Smartphone.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Smartphone deleted successfully!');
    })
};