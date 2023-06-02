const { Router } = require("express");

const { ProductController } = require("../controllers");
const { ValidMongoId, ProductSchemaValidation } = require("../middlewares");

const ProductRouter = Router();

ProductRouter.get("/", ProductController.getAllProducts);
ProductRouter.get(
	"/:productId",
	ValidMongoId,
	ProductController.getOneProductById
);
ProductRouter.post(
	"/",
	ProductSchemaValidation,
	ProductController.createNewProduct
);
ProductRouter.patch(
	"/:productId",
	ValidMongoId,
	ProductController.updateOneProductById
);
ProductRouter.delete(
	"/:productId",
	ValidMongoId,
	ProductController.deleteOneProductById
);

module.exports = ProductRouter;
