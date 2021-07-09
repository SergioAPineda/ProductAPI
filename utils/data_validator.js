const Joi = require('@hapi/joi');

const schema = Joi.object({
  name: Joi.string()
    .min(3)
    .required(),
  value: Joi.number()
    .min(1000)
    .required(),
  specialDate: Joi.string()
    .required(),  
  inFillMaterial: Joi.string()
    .required(),
  state: Joi.string()
    .required(),
  description: Joi.string()
    .required(),
  expirationDate: Joi.date()
    .required(),
})

module.exports = schema;