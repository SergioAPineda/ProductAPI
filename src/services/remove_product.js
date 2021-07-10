const express = require('express');
const Product = require('../models/product');

async function deleteProduct(_id){
  let product = await Product.findByIdAndDelete(_id, function(error){
    if(error){
      console.log(error);
    }
  });
}

module.exports = deleteProduct;