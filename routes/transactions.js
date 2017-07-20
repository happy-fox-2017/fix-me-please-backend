const express = require('express');
const router = express.Router()
var transactionsController = require('../controllers/transactions');

router.get('/', transactionsController.all)
console.log('masuk1');
router.post('/', transactionsController.create)
console.log('masuk2');
router.put('/:id', transactionsController.update)
console.log('masuk3');
router.delete('/:id', transactionsController.delete)
console.log('masuk4');

module.exports = router;
