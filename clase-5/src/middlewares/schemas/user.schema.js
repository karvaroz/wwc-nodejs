const Joi = require("joi");

const Userchema = Joi.object({
	username: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().required(),
	role: Joi.string(),
});

module.exports = Userchema;
