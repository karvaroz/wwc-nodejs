const { Router } = require("express");
const { UserController } = require("../controllers");
const { UserSchemaValidation } = require("../middlewares");

const UserRouter = Router();

UserRouter.get("/", UserController.getAllUsers)
	.get("/:userId", UserController.getOneUserById)
	.post("/", UserSchemaValidation, UserController.createNewUser)
	.patch("/:userId", UserController.updateOneUserById)
	.delete("/:userId", UserController.deleteOneUserById);

module.exports = UserRouter;
