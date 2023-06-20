const path = require('path');

const express = require('express');

const userController = require('../controller/userController');

const router = express.Router();


router.get('/get-users', userController.getUsers);

// user/add-user => GET
router.get('/', userController.getAddUser);

// user/add-user => POST
router.post('/', userController.postAddUser);



// admin/products => GET
// router.get('/products', adminController.getProducts);

// // /admin/add-product => POST
// router.post('/add-product', adminController.postAddProduct);

// router.get('/edit-product/:productId', adminController.getEditProduct);

// router.post('/delete', adminController.postDeleteProduct);

// router.post('/edit-product', adminController.postEditProduct);

module.exports = router;
