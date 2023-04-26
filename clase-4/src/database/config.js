const mongoose = require("mongoose");

const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGO);
		console.log("✔ Connected to Database");
	} catch (error) {
		console.log(error);
		throw new Error("✖ Couldn't connect to database");
	}
};

module.exports = {
	dbConnection,
};
