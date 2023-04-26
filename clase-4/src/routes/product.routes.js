const { Router } = require("express");

const productController = require("../controllers/product.controller");
const productSchemaValidation = require("../middlewares/product.middleware");
const validMongoId = require("../middlewares/validMongoId");

const AppRouter = Router();

AppRouter.get("/", productController.getAllProducts)
	.get("/:productId", validMongoId, productController.getOneProductById)
	.post("/", productController.createNewProduct)
	.patch(
		"/:productId",
		validMongoId,
		productSchemaValidation,
		productController.updateOneProductById
	)
	.delete("/:productId", validMongoId, productController.deleteOneProductById);

module.exports = AppRouter;
