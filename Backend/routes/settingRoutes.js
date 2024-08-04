const express = require('express');
const { updateTrackedSymbol, getTrackedSymbol } = require('../controllers/settingController');

const router = express.Router();

router.post('/', updateTrackedSymbol);
router.get('/', getTrackedSymbol);

module.exports = router;
