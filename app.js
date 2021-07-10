const express = require('express');
const mongoose = require('mongoose');
const createProducts = require('./controller/post-product') 
const updateProducts = require('./controller/put-product')
const softDeleteProducts = require('./controller/soft-delete-product')
const deleteProducts = require('./controller/delete-product') 
const getProductById = require('./controller/get-product-by-id')
const getAllProducts = require('./controller/get-allProducts')
const getSoonToExpire = require('./controller/get-soonToExpire')
const updateProductState = require('./controller/patch-productState')
mongoose.connect('mongodb://localhost:27017/projectDB', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
  .then(() => console.log('connected to MongoDB...'))
  .catch(error => console.log('Something went wrong: '+ error));

const app = express();
app.use(express.json());
app.use('/api/products', createProducts);
app.use('/api/products', updateProducts);
app.use('/api/products', softDeleteProducts);
app.use('/api/products', deleteProducts);
app.use('/api/products', getProductById);
app.use('/api/products', getAllProducts);
app.use('/api/products/expire', getSoonToExpire);
app.use('/api/products', updateProductState);


const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log('Running on port: '+ port);
})