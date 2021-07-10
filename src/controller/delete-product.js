const express = require('express');
const Product = require('../models/product');
const deleteProduct = require('../services/remove_product');


const route = express.Router();

/**
 * @swagger
 * /api/products/hard/{id}:
 *  delete:
 *    description: Este servicio sirve para eliminar de forma permanente un producto de la base de datos.
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Agregue el id del producto que desea eliminar.
 *        required: true
 *    responses:
 *      '200':
 *        description: El servicio esta funcionando correctamente
 */
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