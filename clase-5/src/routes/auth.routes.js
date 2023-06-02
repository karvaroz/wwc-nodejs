const { Router } = require("express");
const path = require("path");
const { UserController } = require("../controllers");
const { LoginSchemaValidation } = require("../middlewares");

const AuthRouter = Router();

AuthRouter.get("/login", (req, res) => {
	res.sendFile(path.resolve("src/views/login.html"));
});
AuthRouter.get("/playground", (req, res) => {
	res.sendFile(path.resolve("src/views/playground.html"));
});

AuthRouter.post("/login", LoginSchemaValidation, UserController.loginUser);

module.exports = AuthRouter;
