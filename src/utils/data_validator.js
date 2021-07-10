const Joi = require('@hapi/joi');

const schema = Joi.object({
  name: Joi.string()
    .min(3)
    .required(),
  value: Joi.number()
    .min(1000)
    .required(),
  specialDate: Joi.string()
    .min(3)
    .required(),  
  inFillMaterial: Joi.string()
    .min(3)
    .required(),
  state: Joi.string()
    .min(3)
    .required(),
  description: Joi.string()
    .min(4)
    .required(),
  expirationDate: Joi.date()
    .greater(Date.now())
    .required(),
})

module.exports = schema;