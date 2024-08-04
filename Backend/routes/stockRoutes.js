const express = require('express');
const { getRecentStockData, getStocksList } = require('../controllers/stockController');

const router = express.Router();

router.get('/:symbol', getRecentStockData);
router.get('/get-stocks-List', getStocksList);

module.exports = router;
