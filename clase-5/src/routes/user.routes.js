const { Router } = require("express");
const { UserController } = require("../controllers");
const { UserSchemaValidation, isAuthenticated } = require("../middlewares");

const UserRouter = Router();

UserRouter.get("/", UserController.getAllUsers);
UserRouter.get("/:userId", UserController.getOneUserById);
UserRouter.post(
	"/",
	isAuthenticated,
	UserSchemaValidation,
	UserController.createNewUser
);
UserRouter.patch("/:userId", isAuthenticated, UserController.updateOneUserById);
UserRouter.delete(
	"/:userId",
	isAuthenticated,
	UserController.deleteOneUserById
);

module.exports = UserRouter;
