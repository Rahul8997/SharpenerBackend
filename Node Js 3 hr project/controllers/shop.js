const Shop = require('../models/Shop');

const bodyParser = require('body-parser');

exports.getAddcandy = (req, res, next) => {
  res.send("hello from shop");
  // Shop.findAll()
  //  .then(candies => {
  //     console.log(candies)
  //  })
  //  .catch(err => {
  //   console.log(err)
  //  });
};

exports.postAddcandy = (req, res, next) => {
  // res.send(req.body);
  // res.json(req.body);
  // console.log(req.body)
  const candyname=req.body.candy;
  const price=req.body.price;
  const description=req.body.description;
  const quantity=req.body.quantity;

 console.log(req.body.candyname)
//  console.log({
//     Candyname:candyname,
//     Description:description,
//     price:price,
//     Quantity:quantity
//   })

  Shop.create({
    Candyname:candyname,
    Description:description,
    Price:price,
    Quantity:quantity
  })
  .then((candy)=>{
    console.log(candy);
    res.json(candy)
  })
  .catch((err)=>console.log(err));

  // res.redirect('/add-candy')
  //  .then(products => {
  //   res.render('shop/product-list', {
  //     prods: products,
  //     pageTitle: 'All Products',
  //     path: '/products'
  //   });
  //  })
  //  .catch(err => {
  //   console.log(err)
  //  });
};

exports.getCandy = (req, res, next) => {
  // console.log(req.body);
  // const prodId = req.params.productId;
  // Product.findByPk(prodId)
  // .then(product => {
  //   res.render('shop/product-detail', {
  //     product: product,
  //     pageTitle: product.title,
  //     path: '/products'
  //   });
  // })
  // .catch(err => console.log(err));
};

// exports.getIndex = (req, res, next) => {
//   Product.findAll()
//    .then(products => {
//     res.render('shop/index', {
//       prods: products,
//       pageTitle: 'Shop',
//       path: '/'
//     });
//    })
//    .catch(err => {
//     console.log(err)
//    });
// };



