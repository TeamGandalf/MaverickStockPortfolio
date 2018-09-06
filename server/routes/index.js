const router = require('express').Router();
const stockController = require('../controllers/index.js');

// Get stock info from aplhaVantage
router.get('/stockInfo', stockController.getStockInfo)

// post stock
router.post('/stock', stockController.postStockTicker);

// get stock(s)
router.get('/stock', stockController.getStockTicker);

// updates stock quantity
router.put('/resetQuantity', (data) => {stockController.resetStockQuantity(data)});
module.exports = router;