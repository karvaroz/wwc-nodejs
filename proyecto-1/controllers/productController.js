const fs = require("fs");
const path = require("path");
const { randomUUID } = require("crypto");

const filePath = path.resolve(`${"./db"}/productsDb.txt`);
console.log(filePath);

const getAllProducts = async (req, res) => {
	try {
		const data = await fs.promises.readFile(filePath, "utf-8");
		const products = JSON.parse(data);
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json({ error: error });
	}
};

const addProduct = (req, res) => {
	try {
		const { name, description, price, quantity, category } = req.body;
		console.log(req.body);
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ error: error });
	}
};

const updateProductById = (req, res) => {
	try {
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ error: error });
	}
};

const deleteProductById = (req, res) => {
	try {
		res.status(200).json({ success: true });
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
