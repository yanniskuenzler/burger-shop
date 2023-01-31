const express = require('express');
const router = express.Router();
const cors = require('cors');

const {getBurgers, getSupplements, getBurgersByName} = require('./controllers/ProdutController');
const {getFiliales} = require('./controllers/ShopController');
const {healthCheck} = require('./controllers/APIController');

router.get('/burgers', cors(), getBurgers);
router.get('/supplements', cors(), getSupplements);
router.get('/filiales', getFiliales);
router.get('/healthcheck', healthCheck);

module.exports = router;