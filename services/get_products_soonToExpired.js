const express = require('express');
const moment = require('moment');
const Product = require('../models/product');

async function getProductsSoonToExpired(){
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

module.exports = getProductsSoonToExpired;