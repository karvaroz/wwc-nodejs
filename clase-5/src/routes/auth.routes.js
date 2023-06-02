const { Router } = require("express");
const path = require("path");

const AuthRouter = Router();

AuthRouter.get("/login", (req, res) => {
	res.sendFile(path.resolve("src/views/login.html"));
});
AuthRouter.get("/playground", (req, res) => {
	res.sendFile(path.resolve("src/views/playground.html"));
});

module.exports = AuthRouter;
