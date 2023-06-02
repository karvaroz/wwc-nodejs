const { Router } = require("express");

const { ProductController } = require("../controllers");
const {
	isAuthenticated,
	ValidMongoId,
	ProductSchemaValidation,
} = require("../middlewares");

const ProductRouter = Router();

ProductRouter.get("/", ProductController.getAllProducts);
ProductRouter.get(
	"/:productId",
	ValidMongoId,
	ProductController.getOneProductById
);
ProductRouter.post(
	"/",
	isAuthenticated,
	ProductSchemaValidation,
	ProductController.createNewProduct
);
ProductRouter.patch(
	"/:productId",
	ValidMongoId,
	isAuthenticated,
	ProductController.updateOneProductById
);
ProductRouter.delete(
	"/:productId",
	ValidMongoId,
	isAuthenticated,
	ProductController.deleteOneProductById
);

module.exports = ProductRouter;
