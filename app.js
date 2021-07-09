const express = require('express');
const mongoose = require('mongoose');
const createProducts = require('./routes/create_product') 
const updateProducts = require('./routes/update_product') 

mongoose.connect('mongodb://localhost:27017/projectDB', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
  .then(() => console.log('connected to MongoDB...'))
  .catch(error => console.log('Something went wrong: '+ error));

const app = express();
app.use(express.json());
app.use('/api/products', createProducts);
app.use('/api/products', updateProducts);


const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log('Running on port: '+ port);
})