const { ProductModel } = require("../models");

const getAllProducts = async () => {
	try {
		const products = await ProductModel.find();
		return products;
	} catch (error) {
		throw { status: 500, message: error };
	}
};

const getOneProductById = async (productId) => {
	try {
		const productById = await ProductModel.find({ _id: productId });
		return productById;
	} catch (error) {
		throw { status: 500, message: error };
	}
};

const createNewProduct = async (product) => {
	try {
		const createProduct = await new ProductModel(product).save();
		return createProduct;
	} catch (error) {
		throw { status: 500, message: error };
	}
};

const updateOneProductById = async (productId, dataUpdated) => {
	try {
		const productUpdated = await ProductModel.findByIdAndUpdate(
			{ _id: productId },
			dataUpdated,
			{
				returnDocument: "after",
			}
		);
		return productUpdated;
	} catch (error) {
		throw { status: 500, message: error };
	}
};

const deleteOneProductById = async (productId) => {
	try {
		const productToDelete = await ProductModel.findByIdAndRemove({
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
