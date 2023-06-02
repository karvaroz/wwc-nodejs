const Joi = require("joi");

const ProductSchema = Joi.object({
	name: Joi.string().required(),
	description: Joi.string(),
	quantity: Joi.number(),
	price: Joi.number(),
	category: Joi.string(),
});

module.exports = ProductSchema;
