const Joi = require("joi");

const Loginchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().required(),
});

module.exports = Loginchema;
