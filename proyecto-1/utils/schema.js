const Joi = require("joi");

const productSchema = Joi.object().keys({
	id: Joi.string(),
	name: Joi.string(),
	description: Joi.string(),
	price: Joi.number(),
	quantity: Joi.number(),
	category: Joi.string(),
});

module.exports = productSchema;
