const Joi = require("joi");

const Userchema = Joi.object({
	firstName: Joi.string().required(),
	lastName: Joi.string(),
	email: Joi.string().email().required(),
	password: Joi.string().required(),
	role: Joi.string(),
});

module.exports = Userchema;
