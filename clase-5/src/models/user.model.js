const { DataTypes } = require("sequelize");
const { PostgresDB } = require("../database");

const User = PostgresDB.sequelize.define("User", {
	firstName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	lastName: {
		type: DataTypes.STRING,
	},
});

module.exports = User;
