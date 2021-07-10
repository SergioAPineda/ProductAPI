const express = require('express');
const getAllProducts2 = require('../services/get_products_soonToExpired');

const route = express.Router();

route.get("/soon", (req, res) => {
  let result = getAllProducts2();
  result.then(resultValue => {
    res.json({
      result: resultValue
    })
  }).catch(err => {
    res.status(400).json({
      info: "No hay productos proximos a vencer",
      error: err
    })
  });
});

module.exports = route;