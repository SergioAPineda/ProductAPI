const express = require('express');
const getAllProducts = require('../services/get_all_products');

const route = express.Router();

route.get("/", (req, res) => {
  let result = getAllProducts();
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