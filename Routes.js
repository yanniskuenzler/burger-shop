const express = require('express');
const router =express.Router();

const {getBurgers, getSupplements} = require('./controllers/ProdutController');
const {getFiliales} = require('./controllers/ShopController');

router.get('/burgers', getBurgers);
router.get('/supplements', getSupplements);
router.get('/filiales', getFiliales);

module.exports = router;