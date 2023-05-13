const mongoose = require("mongoose");

const dbConnectionMongo = async () => {
	try {
		await mongoose.connect(process.env.MONGO);
		console.log("✔ Connected to Mongo Database - Product");
	} catch (error) {
		console.log(error);
		throw new Error("✖ Couldn't connect to Mongo Database - Product");
	}
};

module.exports = {
	dbConnectionMongo,
};
