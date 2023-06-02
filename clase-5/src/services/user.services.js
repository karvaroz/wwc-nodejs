const { UserDB } = require("../database");
const { encrypt } = require("../helpers/handleBcrypt");

const getAllUsers = async () => {
	try {
		return await UserDB.getAllUsers();
	} catch (error) {
		throw error;
	}
};
const getOneUserById = async (userId) => {
	try {
		return await UserDB.getOneUserById(userId);
	} catch (error) {
		throw error;
	}
};
const createNewUser = async (user) => {
	try {
		const { password } = user;
		const passwordHash = await encrypt(password);

		return await UserDB.createNewUser({
			...user,
			password: passwordHash,
		});
	} catch (error) {
		throw error;
	}
};
const updateOneUserById = async (userId, dataUpdated) => {
	try {
		return await UserDB.updateOneUserById(userId, dataUpdated);
	} catch (error) {
		throw error;
	}
};
const deleteOneUserById = async (userId) => {
	try {
		return await UserDB.deleteOneUserById(userId);
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getAllUsers,
	getOneUserById,
	createNewUser,
	updateOneUserById,
	deleteOneUserById,
};
