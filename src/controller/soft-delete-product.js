const express = require('express');
const Product = require('../models/product');
const softDeleteProduct = require('../services/disable_product');


const route = express.Router();

/**
 * @swagger
 * /api/products/{id}:
 *  delete:
 *    description: Este servicio sirve para deshabilitar un producto de la base de datos.
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Agregue el id del producto que desea deshabilitar.
 *        required: true
 *    responses:
 *      '200':
 *        description: El servicio esta funcionando correctamente
 */
route.delete('/:_id', (req, res) => {
  let result = softDeleteProduct(req.params._id);
  result.then(resultValue => {
    res.json({
      product: resultValue
    })
  }).catch(err => {
    res.status(400).json({
      error: err
    })
  });
});

module.exports = route;