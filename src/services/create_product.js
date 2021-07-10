const express = require('express');
const Product = require('../models/product');
const schema = require('../utils/data_validator');

async function createProduct(body) {
  let product = new Product({
    name:           body.name,
    value:          body.value,
    specialDate:    body.specialDate,
    inFillMaterial: body.inFillMaterial,
    state:          body.state,
    description:    body.description,
    expirationDate: body.expirationDate,
  });
  return await product.save();
}

module.exports = createProduct;