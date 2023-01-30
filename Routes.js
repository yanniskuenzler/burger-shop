const express = require('express');
const router = express.Router();
const cors = require('cors');

const {getBurgers, getSupplements} = require('./controllers/ProdutController');
const {getFiliales} = require('./controllers/ShopController');
const {healthCheck} = require('./controllers/APIController');

router.get('/burgers', cors(), getBurgers);
router.get('/supplements', getSupplements);
router.get('/filiales', getFiliales);
router.get('/healthcheck', healthCheck);

router.options('*', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', "DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    return res.status(200).end();
});

module.exports = router;