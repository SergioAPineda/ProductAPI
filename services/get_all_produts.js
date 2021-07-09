const express = require('express');
const Product = require('../models/product');

async function getAllProducts(){
  let product = await Product.find()
  return product 
}

module.exports = getAllProducts;