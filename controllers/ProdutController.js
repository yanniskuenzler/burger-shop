const {ProductModel} = require("../models/ProductModel");
const pmodel = new ProductModel();

const getBurgers = (req, res) => {
    pmodel.modelEntry('burgers')
        .then(data => res.send(data))
        .catch(err => res.send('Es gab einen Fehler'));
}

const getSupplements = (req, res) => {
    pmodel.modelEntry('supplements')
        .then(data => res.send(data))
        .catch(err => res.send('Es gab einen Fehler'));
}

const getBurgersByName = (req, res) => {

}

module.exports = {getBurgers, getSupplements}