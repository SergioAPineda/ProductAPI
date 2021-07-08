const express = require('express');
const Product = require('../models/product-model')

const route = express.Router();

route.get('/', (req, res) => {
  res.json('GET is ok');
});


route.post('/', (req, res) => {
  let body = req.body;
  let result = createProduct(body);

  result.then( product => {
    res.json({
      value: product
    })
  }).catch(error => {
    res.status(400).json({
      err: error
    })
  })
})


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

module.exports = route;