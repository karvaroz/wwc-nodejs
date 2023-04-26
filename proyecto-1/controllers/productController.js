const fs = require("fs");
const path = require("path");
const { randomUUID } = require("crypto");
const productSchema = require("../utils/schema");

const filePath = path.resolve(`${"./db"}/productsDb.txt`);
const products = JSON.parse(fs.readFileSync(filePath));

const getAllProducts = async (req, res) => {
	try {
		res.status(200).json({
			status: 200,
			msg: "List of products",
			data: products,
		});
	} catch (error) {
		res.status(500).json({ error });
	}
};

const saveInDB = async (data) => {
	try {
		await fs.promises.writeFile(filePath, JSON.stringify(data));
	} catch (error) {
		console.log(error);
	}
};

const addProduct = async (req, res) => {
	try {
		const newProduct = {
			id: randomUUID(),
			...req.body,
		};
		products.push(newProduct);
		saveInDB(products);
		res.status(201).json({
			status: 201,
			msg: "Product successfully added",
			data: newProduct,
		});

		res.status(422).json({
			message: "Invalid request",
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
};

const updateProductById = async (req, res) => {
	try {
		const { name, description, price, quantity, category } = req.body;

		const productToUpdate = products.map((product) => {
			if (product.id === req.params.id) {
				return {
					id: product.id,
					name: name || product.name,
					description: description || product.description,
					price: price || product.price,
					quantity: quantity || product.quantity,
					category: category || product.category,
				};
			}
		});

		return res.status(200).json({
			status: 200,
			msg: "Product has been updated",
		});
	} catch (error) {
		res.status(500).json({ error });
	}
};

const deleteProductById = async (req, res) => {
	try {
		const productId = products.find((product) => product.id === req.params.id);
		if (productId) {
			const productsWithoutDeleted = products.filter(
				(product) => product.id !== req.params.id
			);
			await fs.promises.writeFile(
				filePath,
				JSON.stringify(productsWithoutDeleted)
			);
			return res.status(200).json({
				status: 200,
				msg: `Delected ${req.params.id} successfully`,
				data: products,
			});
		}
		return res.status(404).json({
			status: 404,
			msg: `Product with id: ${req.params.id} could not be deleted not found`,
		});
	} catch (error) {
		res.status(500).json({ error });
	}
};

module.exports = {
	getAllProducts,
	addProduct,
	updateProductById,
	deleteProductById,
};
