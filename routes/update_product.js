const express = require('express');
const Product = require('../models/product-model');
const schema = require('../utils/data_validator');

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


module.exports = route;