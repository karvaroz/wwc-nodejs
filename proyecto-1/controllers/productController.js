const fs = require("fs");
const path = require("path");
const { randomUUID } = require("crypto");

const filePath = path.resolve(`${"./db"}/productsDb.txt`);

const getAllProducts = async (req, res) => {
	try {
		const fileData = await fs.promises.readFile(filePath, "utf-8");
		const products = await JSON.parse(fileData);
		if (products) res.status(200).json(products);
	} catch (error) {
		res.status(500).json({ error: error });
	}
};

const addProduct = async (req, res) => {
	try {
		const newProduct = {
			id: randomUUID(),
			...req.body,
		};
		const fileData = await fs.promises.readFile(filePath, "utf-8");
		const products = await JSON.parse(fileData);
		products.push(newProduct);
		await fs.promises.writeFile(filePath, JSON.stringify(products));
		res.status(201).json(newProduct);
	} catch (error) {
		res.status(500).json({ error: error });
	}
};

const updateProductById = async (req, res) => {
	try {
		const fileData = await fs.promises.readFile(filePath, "utf-8");
		const products = await JSON.parse(fileData);

		const { name, description, price, quantity, category } = req.body;

		const productToUpdate = products.map((product) => {
			if (product.id === req.params.id) {
				return {
					id: product.id,
					name: name ? name : product.name,
					description: description ? description : product.description,
					price: price ? price : product.price,
					quantity: quantity ? quantity : product.quantity,
					category: category ? category : product.category,
				};
			}
		});

		return res.status(200).json({
			success: `Product has been updated`,
			productToUpdate,
		});
	} catch (error) {
		res.status(500).json({ error: error });
	}
};

const deleteProductById = async (req, res) => {
	try {
		const fileData = await fs.promises.readFile(filePath, "utf-8");
		const products = await JSON.parse(fileData);

		const productId = products.find((product) => product.id === req.params.id);
		if (productId) {
			const productsWithoutDeleted = products.filter(
				(product) => product.id !== req.params.id
			);
			await fs.promises.writeFile(
				filePath,
				JSON.stringify(productsWithoutDeleted)
			);
			return res.status(200).json(`Delected ${req.params.id} successfully`);
		}
		return res
			.status(404)
			.json(`Product with id: ${req.params.id} could not be deleted not found`);
	} catch (error) {
		res.status(500).json({ error: error });
	}
};

module.exports = {
	getAllProducts,
	addProduct,
	updateProductById,
	deleteProductById,
};
