const path = require('path');
const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop');

router.post('/add-candy', shopController.addCandy);
router.get('/get-candy', shopController.getCandy);
router.post('/delete-candy', shopController.deleteCandy);
router.post('/buy-1', shopController.reducequntity1);
router.post('/buy-2', shopController.reducequntity2);

module.exports = router;