const Joi = require("joi");

const productIdSchema = Joi.string()
	.pattern(new RegExp("^[0-9a-fA-F]{24}$"))
	.required();

const validMongoId = async (req, res, next) => {
	const { productId } = req.params;
	const { error } = await productIdSchema.validate(productId);
	if (error) return res.status(422).json({ error });
	next();
};

module.exports = validMongoId;
