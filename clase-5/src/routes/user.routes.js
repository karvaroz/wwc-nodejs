const { Router } = require("express");
const { UserController } = require("../controllers");

const UserRouter = Router();

UserRouter.get("/", UserController.getAllUsers)
	.get("/:userId", UserController.getOneUserById)
	.post("/", UserController.createNewUser)
	.patch("/:userId", UserController.updateOneUserById)
	.delete("/:userId", UserController.deleteOneUserById);

module.exports = UserRouter;
