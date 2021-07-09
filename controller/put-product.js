const express = require('express');
const Product = require('../models/product');
const schema = require('../utils/data_validator');
const updateProduct = require('../services/update_product');

const route = express.Router();

route.put('/:_id', (req, res) => {
  let body = req.body;
  
  const {error, value} = schema.validate({ 
    name :          body.name,
    value:          body.value,
    specialDate:    body.specialDate,
    inFillMaterial: body.inFillMaterial,
    state:          body.state,
    description:    body.description,
    expirationDate: body.expirationDate,
  });
  if(!error){
    let result = updateProduct(req.params._id, body);
    result.then( resultValue => {
      res.json({
        resultValue: resultValue
      })
    }).catch(error => {
      res.status(400).json({
        error: error
      })
    });
  }else{
    res.status(400).json({
      err: error
    })
  }

});

module.exports = route;