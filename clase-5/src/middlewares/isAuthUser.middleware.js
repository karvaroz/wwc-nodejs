const { verifyToken } = require("../helpers/generateToken");

const isAuthenticated = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ").pop();
		const tokenData = await verifyToken(token);
		if (tokenData.id) next();
	} catch (error) {
		return res.status(error?.status || 401).json({
			status: "AUTHENTICATION FAILED",
		});
	}
};

module.exports = isAuthenticated;
