const express = require('express');
const Product = require('../models/product');
const schema = require('../utils/data_validator');
const updateProductState = require('../services/update_product_state');

const route = express.Router();

route.patch('/:_id', (req, res) => {
  let body = req.body;


  /**
 * @swagger
 * /api/products/{id}:
 *  patch:
 *    description: Este servicio sirve para actualizar el estado del producto seleccionado.
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Agregue el id del producto que desea actualizar.
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *      - name: Producto actualizado
 *        in: body
 *        description: Ingrese el nuevo esta en formato JSON.
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: El servicio esta funcionando correctamente
 */
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