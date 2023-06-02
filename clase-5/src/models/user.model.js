const { DataTypes } = require("sequelize");
const { PostgresDB } = require("../database");

const User = PostgresDB.sequelize.define(
	"User",
	{
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		role: {
			type: DataTypes.ENUM("Admin", "User"),
			defaultValue: "User",
		},
	},
	{
		timestamps: true,
	}
);

module.exports = User;
