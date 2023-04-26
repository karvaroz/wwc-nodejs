const ProductSchema = require("./product.schema");

const productSchemaValidation = (req, res, next) => {
	const { error } = ProductSchema.validate(req.body, { abortEarly: false });
	if (error) return res.status(422).json({ error });
	next();
};

module.exports = productSchemaValidation;
