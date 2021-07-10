const express = require('express');
const Product = require('../models/product');
const getProductById = require('../services/get_product_by_id');


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

module.exports = route;