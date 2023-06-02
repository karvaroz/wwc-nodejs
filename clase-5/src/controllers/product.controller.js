const { ProductService } = require("../services");

const getAllProducts = async (req, res) => {
	try {
		const products = await ProductService.getAllProducts();
		if (products)
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
		const productById = await ProductService.getOneProductById(productId);
		if (productById) res.status(200).json({ status: "OK", data: productById });
		res.status(404).send({
			status: "FAILED",
			data: { error: "Not found" },
		});
	} catch (error) {
		res
			.status(error?.status || 500)
			.json({ status: "FAILED", data: { error: error?.message || error } });
	}
};

const createNewProduct = async (req, res) => {
	try {
		const product = req.body;
		const createProduct = await ProductService.createNewProduct(product);
		if (createNewProduct)
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

	const productById = await ProductService.getOneProductById(productId);
	if (!productById) {
		res.status(404).send({
			status: "FAILED",
			data: { error: "Not found" },
		});
		return;
	}
	try {
		const productUpdated = await ProductService.updateOneProductById(
			productId,
			productInfo
		);
		if (productUpdated)
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

	const productById = await ProductService.getOneProductById(productId);
	if (!productById) {
		res.status(404).send({
			status: "FAILED",
			data: { error: "Not found" },
		});
		return;
	}
	try {
		await ProductService.deleteOneProductById(productId);
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
