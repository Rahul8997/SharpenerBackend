const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

// router.get('/', shopController.getIndex);

router.get('/add-candy/:productId', shopController.getCandy);

router.get('/add-candy', shopController.getAddcandy);

router.post('/add-candy', shopController.postAddcandy);

// router.post('/cart-delete-item', shopController.postCartDeleteProduct);

// router.get('/orders', shopController.getOrders);

// router.get('/checkout', shopController.getCheckout);

module.exports = router;
