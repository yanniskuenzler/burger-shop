const express = require('express');
const router = express.Router();

const {getBurgers, getSupplements} = require('./controllers/ProdutController');
const {getFiliales} = require('./controllers/ShopController');
const {healthCheck} = require('./controllers/APIController');

router.get('/burgers', getBurgers);
router.get('/supplements', getSupplements);
router.get('/filiales', getFiliales);
router.get('/healthcheck', healthCheck);

module.exports = router;