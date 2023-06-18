const db=require('../util/database');
// const fs = require('fs');
// const path = require('path');
// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   'data',
//   'products.json'
// );

// const getProductsFromFile = cb => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('INSERT INTO products (title,price,description,imageurl) VALUES (?,?,?,?)',
    [this.title,this.price,this.description,this.imageUrl]);

    // getProductsFromFile(products => {
    //   if (this.id) {
    //     const existingProductIndex = products.findIndex(
    //       prod => prod.id === this.id
    //     );
    //     const updatedProducts = [...products];
    //     updatedProducts[existingProductIndex] = this;
    //     fs.writeFile(p, JSON.stringify(updatedProducts), err => {
    //       console.log(err);
    //     });
    //   } else {
    //     this.id = Math.random().toString();
    //     products.push(this);
    //     fs.writeFile(p, JSON.stringify(products), err => {
    //       console.log(err);
    //     });
    //   }
    // });
  }

  static fetchAll() {
    // getProductsFromFile(cb);
    return db.execute('SELECT * FROM products')
  }

  static findById(id, cb) {
    // getProductsFromFile(products => {
    //   const product = products.find(p => p.id === id);
    //   cb(product);
    // });
    return db.execute('SELECT * FROM products WHERE products.id=?',[id])
  }

  static deleteByProductId(id) {
    return db.execute('DELETE FROM products WHERE products.id=?',[id])
    // console.log("Id in deleteByProductId",id)
    // getProductsFromFile(products => {
    //   let updatedproducts = products.filter((ele) => {
    //     return ele.id !== id;
    //   });
    //   console.log(updatedproducts)
    //   fs.writeFile(p, JSON.stringify(updatedproducts), err => {
    //     console.log(err);
    //   });
    // })

    // getProductsFromFile(products => {
    //   const product = products.find(prod => prod.id === id);
    //   const updatedProducts = products.filter(prod => prod.id !== id);
    //   fs.writeFile(p, JSON.stringify(updatedProducts), err => {
    //     if (!err) {
    //       Cart.deleteProduct(id, product.price);
    //     }
    //     console.log(err)
    //   });
    // });

  }
};