const express = require('express');
const Product = require('../models/product-model');


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

async function softDeleteProduct(_id){
  let product = await Product.findByIdAndUpdate(_id, {
    $set: {
      state: "disabled"
    }
  }, {new: true});
  return product;
}

module.exports = route;