const express = require('express');
const Product = require('../models/product');
const schema = require('../utils/data_validator');
const updateProductState = require('../services/update_product_state');

const route = express.Router();

route.patch('/:_id', (req, res) => {
  let body = req.body;

  let result = updateProductState(req.params._id, body);
  result.then( resultValue => {
    res.json({
      resultValue: resultValue
    })
  }).catch(error => {
    res.status(400).json({
      error: error
    })
  });
});

module.exports = route;