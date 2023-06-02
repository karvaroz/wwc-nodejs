const { Router } = require("express");
const { UserController } = require("../controllers");
const { UserSchemaValidation } = require("../middlewares");

const UserRouter = Router();

UserRouter.get("/", UserController.getAllUsers);
UserRouter.get("/:userId", UserController.getOneUserById);
UserRouter.post("/", UserSchemaValidation, UserController.createNewUser);
UserRouter.patch("/:userId", UserController.updateOneUserById).delete(
	"/:userId",
	UserController.deleteOneUserById
);

module.exports = UserRouter;
