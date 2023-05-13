const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.POSTGRESQL);

const dbConnectionPostgres = async () => {
	try {
		await sequelize.sync();
		await sequelize.authenticate();
		console.log("✔ Connected to Postgres Database - User");
	} catch (error) {
		throw new Error("✖ Couldn't connect to Postgres Database - User");
	}
};
module.exports = { dbConnectionPostgres, sequelize };
