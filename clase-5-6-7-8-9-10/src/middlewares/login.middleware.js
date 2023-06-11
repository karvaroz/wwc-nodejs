const Loginchema = require("./schemas/login.schema");

const LoginSchemaValidation = (req, res, next) => {
	const { error } = Loginchema.validate(req.body, { abortEarly: false });
	if (error) return res.status(422).json({ error });
	next();
};

module.exports = LoginSchemaValidation;
