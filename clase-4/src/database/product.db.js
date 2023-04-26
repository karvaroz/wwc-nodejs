const ProductSchema = require("../models/product.model");
const ProductCollection = require("../models/product.model");

const getAllProducts = async () => {
	try {
		const products = await ProductCollection.find();
		return products;
	} catch (error) {
		throw { status: 500, message: error };
	}
};

const getOneProductById = async (productId) => {
	try {
		const producyById = await ProductCollection.find({ _id: productId });
		return producyById;
	} catch (error) {
		throw { status: 500, message: error };
	}
};

const createNewProduct = async (product) => {
	try {
		const createProduct = await new ProductSchema(product).save();
		return createProduct;
	} catch (error) {
		throw { status: 500, message: error };
	}
};

const updateOneProductById = async (productId, dataUpdated) => {
	try {
		const productUpdated = await ProductCollection.findByIdAndUpdate(
			{ _id: productId },
			dataUpdated
		);
		return productUpdated;
	} catch (error) {
		throw { status: 500, message: error };
	}
};

const deleteOneProductById = async (productId) => {
	try {
		const productToDelete = await ProductCollection.findByIdAndRemove({
			_id: productId,
		});
		if (!productToDelete) {
			throw {
				status: 400,
				message: `Can't find product with the id '${productId}'`,
			};
		}
	} catch (error) {
		throw { status: 500, message: error };
	}
};

module.exports = {
	getAllProducts,
	getOneProductById,
	createNewProduct,
	updateOneProductById,
	deleteOneProductById,
};
