const express = require('express');
const getAllProducts = require('../services/get_all_products');

const route = express.Router();

/**
 * @swagger
 * /api/products/:
 *  get:
 *    description: Este servicio sirve para traer todos los productos de la base de datos.
 *    responses:
 *      '200':
 *        description: El servicio esta funcionando correctamente
 */
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