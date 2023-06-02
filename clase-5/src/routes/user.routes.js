const { Router } = require("express");
const { UserController } = require("../controllers");
const {
	UserSchemaValidation,
	isAuthenticated,
	isRoleAdmin,
} = require("../middlewares");

const UserRouter = Router();

UserRouter.get("/", isAuthenticated, UserController.getAllUsers);
UserRouter.get("/:userId", isAuthenticated, UserController.getOneUserById);
UserRouter.post("/", UserSchemaValidation, UserController.createNewUser);
UserRouter.patch(
	"/:userId",
	isAuthenticated,
	// isRoleAdmin,
	UserController.updateOneUserById
);
UserRouter.delete(
	"/:userId",
	isAuthenticated,
	// isRoleAdmin,
	UserController.deleteOneUserById
);

module.exports = UserRouter;
