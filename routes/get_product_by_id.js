const express = require('express');
const Product = require('../models/product-model');


const route = express.Router();

route.get('/:_id', (req, res) => {
  let result = getProductById(req.params._id);
  result.then(resultValue => {
    res.json({
      result: resultValue
    })
  }).catch(err => {
    res.status(400).json({
      info: "El producto solicitado no existe, por favor verifique el id",
      error: err
    })
  });
});

async function getProductById(_id){
  let product = await Product.findById(_id)
  return product 
}

module.exports = route;