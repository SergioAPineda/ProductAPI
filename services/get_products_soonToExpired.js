const express = require('express');
const moment = require('moment');
const Product = require('../models/product');

async function getAllProducts2(){
  let product = await Product.find()
  let newResult = product.filter(currentProduct =>{

    let currentDate = moment()
    let expiratioDate = moment(currentProduct.expirationDate);
    let diffDays = currentDate.diff(expiratioDate, 'days');

    if(diffDays > -30){
      return currentProduct
    }
  });
  
  return newResult; 
}

module.exports = getAllProducts2;