const express = require('express');
const Product = require('../models/product');

async function softDeleteProduct(_id){
  let product = await Product.findByIdAndUpdate(_id, {
    $set: {
      state: "disabled"
    }
  }, {new: true});
  return product;
}

module.exports = softDeleteProduct;