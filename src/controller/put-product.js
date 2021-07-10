const express = require('express');
const Product = require('../models/product');
const schema = require('../utils/data_validator');
const updateProduct = require('../services/update_product');

const route = express.Router();

/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *    description: Este servicio sirve para cambiar la informacion de un producto seleccionado.
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
 *        description: Ingrese el JSON de un producto con la información actualizada.
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: El servicio esta funcionando correctamente
 */
route.put('/:_id', (req, res) => {
  let body = req.body;
  
  const {error, value} = schema.validate({ 
    name :          body.name,
    value:          body.value,
    specialDate:    body.specialDate,
    inFillMaterial: body.inFillMaterial,
    state:          body.state,
    description:    body.description,
    expirationDate: body.expirationDate,
  });
  if(!error){
    let result = updateProduct(req.params._id, body);
    result.then( resultValue => {
      res.json({
        resultValue: resultValue
      })
    }).catch(error => {
      res.status(400).json({
        error: error
      })
    });
  }else{
    res.status(400).json({
      err: error
    })
  }

});

module.exports = route;