const express = require('express');
const Product = require('../models/product');
const softDeleteProduct = require('../services/disable_product');


const route = express.Router();

route.delete('/:_id', (req, res) => {
  let result = softDeleteProduct(req.params._id);
  result.then(resultValue => {
    res.json({
      product: resultValue
    })
  }).catch(err => {
    res.status(400).json({
      error: err
    })
  });
});

module.exports = route;