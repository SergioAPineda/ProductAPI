const express = require('express');
const Product = require('../models/product');
const getProductById = require('../services/get_product_by_id');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const route = express.Router();


/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *    description: Este servicio sirve para buscar un producto por id en la base datos.
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Agregue un id para para hacer la busqueda.
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: El servicio esta funcionando correctamente
 */
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