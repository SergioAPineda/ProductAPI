const express = require('express');
const Product = require('../models/product');


async function updateProductState(_id, body) {
  let product = await Product.findByIdAndUpdate(_id, {
    $set: {
      state:          body.state,
    }
  }, {new: true});
  return product;
}


module.exports = updateProductState;