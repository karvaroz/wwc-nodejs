const { Router } = require("express");

const { ProductController } = require("../controllers");
const { ValidMongoId, ProductSchemaValidation } = require("../middlewares");

const ProductRouter = Router();

ProductRouter.get("/", ProductController.getAllProducts)
	.get("/:productId", ValidMongoId, ProductController.getOneProductById)
	.post("/", ProductSchemaValidation, ProductController.createNewProduct)
	.patch("/:productId", ValidMongoId, ProductController.updateOneProductById)
	.delete("/:productId", ValidMongoId, ProductController.deleteOneProductById);

module.exports = ProductRouter;
