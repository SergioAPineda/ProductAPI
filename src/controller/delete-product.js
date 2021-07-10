const express = require('express');
const Product = require('../models/product');
const deleteProduct = require('../services/remove_product');


const route = express.Router();

route.delete('/hard/:_id', (req, res) => {
  let result = deleteProduct(req.params._id);
  result.then(resultValue => {
    res.json({
      result: "The selected product was deleted"
    })
  }).catch(err => {
    res.status(400).json({
      error: err
    })
  });
});

module.exports = route;