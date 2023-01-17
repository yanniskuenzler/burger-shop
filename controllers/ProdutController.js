const {ProductModel} = require("../models/ProductModel");
const pmodel = new ProductModel();

const getBurgers = (req, res) => {
    pmodel.getBurgers().then(() => {
        res.send(pmodel.getBurgerResponse());
    })
}

const getSupplements = (req, res) => {
    pmodel.getSupplements().then(() => {
        res.send(pmodel.getSupplementsResponse());
    })
}

module.exports = {getBurgers, getSupplements}