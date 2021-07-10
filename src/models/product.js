const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  value: {
    type: Number,
    require: true
  },
  specialDate: {
    type: String,
    require: true
  },
  inFillMaterial: {
    type: String,
    require: true
  },
  state: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  expirationDate: {
    type: Date,
    require: true
  },
})


module.exports = mongoose.model('product', productSchema);