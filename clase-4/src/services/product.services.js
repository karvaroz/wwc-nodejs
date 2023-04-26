const ProductDB = require("../database/product.db");

const getAllProducts = async () => {
	try {
		const products = await ProductDB.getAllProducts();
		return products;
	} catch (error) {
		throw error;
	}
};

const getOneProductById = async (productId) => {
	try {
		const producyById = await ProductDB.getOneProductById(productId);
		return producyById;
	} catch (error) {
		throw error;
	}
};

const createNewProduct = async (product) => {
	try {
		const createProduct = await ProductDB.createNewProduct(product);
		return createProduct;
	} catch (error) {
		throw error;
	}
};

const updateOneProductById = async (productId, productInfo) => {
	try {
		const updateProduct = await ProductDB.updateOneProductById(
			productId,
			productInfo
		);
		return updateProduct;
	} catch (error) {
		throw error;
	}
};

const deleteOneProductById = async (productId) => {
	try {
		return await ProductDB.deleteOneProductById(productId);
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getAllProducts,
	getOneProductById,
	createNewProduct,
	updateOneProductById,
	deleteOneProductById,
};
