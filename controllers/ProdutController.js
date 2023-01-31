const {ProductModel} = require("../models/ProductModel");
const pmodel = new ProductModel();

const getBurgers = (req, res) => {
    pmodel.modelEntry('burgers')
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send("" + err));
}

const getSupplements = (req, res) => {
    pmodel.modelEntry('supplements')
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send("" + err));
}

module.exports = {getBurgers, getSupplements}