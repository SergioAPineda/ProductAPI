const express = require('express');
const Product = require('../models/product');

async function getProductById(_id){
  let product = await Product.findById(_id)
  return product 
}

module.exports = getProductById;