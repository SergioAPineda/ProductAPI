const express = require('express');
const Product = require('../models/product-model');


const route = express.Router();

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

async function deleteProduct(_id){
  let product = await Product.findByIdAndDelete(_id, function(error){
    if(error){
      console.log(error);
    }
  });
}

module.exports = route;