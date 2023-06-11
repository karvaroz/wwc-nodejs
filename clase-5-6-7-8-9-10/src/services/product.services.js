const { ProductDB } = require("../database");

const getAllProducts = async () => {
	try {
		return await ProductDB.getAllProducts();
	} catch (error) {
		throw error;
	}
};

const getOneProductById = async (productId) => {
	try {
		return await ProductDB.getOneProductById(productId);
	} catch (error) {
		throw error;
	}
};

const createNewProduct = async (product) => {
	try {
		return await ProductDB.createNewProduct(product);
	} catch (error) {
		throw error;
	}
};

const updateOneProductById = async (productId, productInfo) => {
	try {
		return await ProductDB.updateOneProductById(productId, productInfo);
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
