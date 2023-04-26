const productService = require("../services/product.services");

const getAllProducts = async (req, res) => {
	try {
		const products = await productService.getAllProducts();
		res
			.status(200)
			.json({ status: "OK", total: products.length, data: products });
	} catch (error) {
		res
			.status(error?.status || 500)
			.json({ status: "FAILED", data: { error: error?.message || error } });
	}
};

const getOneProductById = async (req, res) => {
	const { productId } = req.params;

	if (!productId) {
		res.status(400).send({
			status: "FAILED",
			data: { error: "Parameter ':productId' can not be empty" },
		});
		return;
	}

	try {
		const productById = await productService.getOneProductById(productId);
		res.status(200).json({ status: "OK", data: productById });
	} catch (error) {
		res
			.status(error?.status || 500)
			.json({ status: "FAILED", data: { error: error?.message || error } });
	}
};

const createNewProduct = async (req, res) => {
	const product = req.body;

	try {
		const createProduct = await productService.createNewProduct(product);
		res.status(201).json({ status: "OK", data: createProduct });
	} catch (error) {
		res
			.status(error?.status || 500)
			.json({ status: "FAILED", data: { error: error?.message || error } });
	}
};

const updateOneProductById = async (req, res) => {
	const { productId } = req.params;
	const productInfo = req.body;
	try {
		const updateProduct = await productService.updateOneProductById(
			productId,
			productInfo
		);

		res
			.status(200)
			.json({ status: "OK", data: `Product ${productId} updated` });
	} catch (error) {
		res
			.status(error?.status || 500)
			.json({ status: "FAILED", data: { error: error?.message || error } });
	}
};

const deleteOneProductById = async (req, res) => {
	const { productId } = req.params;

	if (!productId) {
		res.status(400).json({
			status: "FAILED",
			data: { error: "Parameter ':productId' can not be empty" },
		});
		return;
	}
	try {
		await productService.deleteOneProductById(productId);
		res
			.status(200)
			.json({ status: "OK", data: `Product ${productId} deleted` });
	} catch (error) {
		res
			.status(error?.status || 500)
			.json({ status: "FAILED", data: { error: error?.message || error } });
	}
};

module.exports = {
	getAllProducts,
	getOneProductById,
	createNewProduct,
	updateOneProductById,
	deleteOneProductById,
};
