const isRoleAdmin = (roles) => async () => {
	try {
	} catch (error) {
		return res.status(error?.status || 403).json({
			status: "YOU ARE NOT ALLOWED",
		});
	}
};
