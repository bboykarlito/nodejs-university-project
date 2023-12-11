const express = require('express');
const products = require('./products');
const { blockSpecialBrand } = require('./middleware');

const router = express.Router();

const OBJECT_ID_RE = /^[0-9]*$/;

// handle get request for path /products
router.get('/products', (_req, res) => {
   return res.json(products);
});

// Middleware to choose correct route according to the parameter content.
// Let's assume that brand name can't be a number =)
router.param('id', function(_req, _res, next, value, _name) {
  if (OBJECT_ID_RE.test(value)) {
    next()
  } else {
    next('route')
  }
})

router.get('/products/:id', (req, res) => {
    const { id } = req.params; // Access the brand parameter from the URL
 
    // Filter products based on the brand parameter
    const filteredProducts = products.filter(product => product.id === parseInt(id));
 
    res.json(filteredProducts); // Send the filtered products as a JSON response
});

// handle get request for path /products/:brand
router.get('/products/:brand', blockSpecialBrand, (req, res) => {
   const { brand } = req.params; // Access the brand parameter from the URL

   // Filter products based on the brand parameter
   const filteredProducts = products.filter(product => product.brand === brand);

   res.json(filteredProducts); // Send the filtered products as a JSON response
});

router.get('/productswitherror', (_req, _res) => {
    let err = new Error("processing error ")
    err.statusCode = 400
    throw err
 });

module.exports = router;