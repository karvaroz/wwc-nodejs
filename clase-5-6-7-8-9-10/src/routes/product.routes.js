const { Router } = require("express");

const { ProductController } = require("../controllers");
const {
	isAuthenticated,
	ValidMongoId,
	ProductSchemaValidation,
	isRoleAdmin,
} = require("../middlewares");

const ProductRouter = Router();

ProductRouter.get("/", isAuthenticated, ProductController.getAllProducts);

ProductRouter.get(
	"/:productId",
	ValidMongoId,
	isAuthenticated,
	ProductController.getOneProductById
);
ProductRouter.post(
	"/",
	isAuthenticated,
	isRoleAdmin,
	ProductSchemaValidation,
	ProductController.createNewProduct
);
ProductRouter.patch(
	"/:productId",
	ValidMongoId,
	isAuthenticated,
	isRoleAdmin,
	ProductController.updateOneProductById
);
ProductRouter.delete(
	"/:productId",
	ValidMongoId,
	isAuthenticated,
	isRoleAdmin,
	ProductController.deleteOneProductById
);

module.exports = ProductRouter;
