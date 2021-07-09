const express = require('express');
const Product = require('../models/product');
const schema = require('../utils/data_validator');

async function updateProduct(_id, body) {
  let product = await Product.findByIdAndUpdate(_id, {
    $set: {
      name:           body.name,
      value:          body.value,
      specialDate:    body.specialDate,
      inFillMaterial: body.inFillMaterial,
      state:          body.state,
      description:    body.description,
      expirationDate: body.expirationDate,
    }
  }, {new: true});
  return product;
}


module.exports = updateProduct;