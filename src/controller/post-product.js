const express = require('express');
const Product = require('../models/product');
const schema = require('../utils/data_validator');
const createProduct = require('../services/create_product');

const route = express.Router();


/**
* @swagger
* /api/products/:
*  post:
*    description: Este servicio sirve para agregar un nuevo producto.
*    parameters:
*      - name: Nuevo Producto
*        in: body
*        description: Ingrese el JSON de un nuevo producto (La informacion del producto debe estar completa).
*        required: true
*        schema:
*          type: string
*          format: string
*    responses:
*      '200':
*        description: El servicio esta funcionando correctamente
*/
route.post('/', (req, res) => {
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
    let result = createProduct(body);

    result.then( product => {
      res.json({
        value: product
      })
    }).catch(error => {
      res.status(400).json({
        err: error
      })
    })
  }else{
    res.status(400).json({
      err: error
    })
  }

})

module.exports = route;