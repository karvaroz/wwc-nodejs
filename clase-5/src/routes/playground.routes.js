const { Router } = require("express");
const path = require("path");

const router = Router();

router.get("/login", (req, res) => {
	res.sendFile(path.resolve("src/views/login.html"));
});
router.get("/playground", (req, res) => {
	res.sendFile(path.resolve("src/views/playground.html"));
});

module.exports = router;
