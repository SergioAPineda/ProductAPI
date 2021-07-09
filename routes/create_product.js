const express = require('express');
const Product = require('../models/product-model')

const route = express.Router();

const validateInfo = (body) => {
  if(!body.name){
    throw new Error('Debe ingresar un nombre')
  }
  if (!body.value){
    throw new Error('Todos los productos deben tener un precio')
  } 
  if (body.value < 1000){
    throw new Error('El valor del producto no puede ser menor a 100 pesos')
  } 
  if (body.specialDate.length <= 2){
    throw new Error('La festividad debe tener mas de dos cararcteres')
  } 
  if (!body.inFillMaterial){
    throw new Error('Se debe especificar el relleno de la caja')
  } 
  if (!body.state){
    throw new Error('Se requiere un estado para el producto')
  } 
  if (!body.description){
    throw new Error('Se requiere una descripcion valida')
  } 
  if (!body.expirationDate){
    throw new Error('Es necesario ingresar la fecha de vencimiento del producto')
  }   
  else {
    return body;
  }
}

route.post('/', (req, res) => {
  let info = req.body;
  let body = validateInfo(info);
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
})


async function createProduct(body) {
  let product = new Product({
    name:           body.name,
    value:          body.value,
    specialDate:    body.specialDate,
    inFillMaterial: body.inFillMaterial,
    state:          body.state,
    description:    body.description,
    expirationDate: body.expirationDate,
  });
  return await product.save();
}

module.exports = route;