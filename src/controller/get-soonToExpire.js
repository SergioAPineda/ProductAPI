const express = require('express');
const getProductsSoonToExpired = require('../services/get_products_soonToExpired');

const route = express.Router();

/**
 * @swagger
 * /api/products/expire/soon:
 *  get:
 *    description: Este servicio sirve para traer los productos que venceran en los proximos 30 días.
 *    responses:
 *      '200':
 *        description: El servicio esta funcionando correctamente
 */
route.get("/soon", (req, res) => {
  let result = getProductsSoonToExpired();
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