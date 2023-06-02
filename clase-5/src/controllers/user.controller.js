const { tokenSign } = require("../helpers/generateToken");
const { compare } = require("../helpers/handleBcrypt");

const { UserModel } = require("../models");
const { UserService } = require("../services");

const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;

		const isUserRegistered = await UserModel.findOne({
			where: {
				email,
			},
		});

		if (!isUserRegistered) {
			res.status(404).send({
				status: "FAILED",
				data: { error: "Email not found, please register" },
			});
			return;
		}

		const isPasswordCorrect = await compare(
			password,
			isUserRegistered.password
		);

		if (!isPasswordCorrect) {
			res.status(401).send({
				status: "FAILED",
				data: { error: "Incorrect password" },
			});
			return;
		}

		const tokenSession = await tokenSign(isUserRegistered);

		res.status(200).json({
			status: "OK",
			token: tokenSession,
		});
	} catch (error) {
		res
			.status(error?.status || 500)
			.json({ status: "FAILED", data: { error: error?.message || error } });
	}
};

const getAllUsers = async (req, res) => {
	try {
		const users = await UserService.getAllUsers();
		res.status(200).json({ status: "OK", total: users.length, data: users });
	} catch (error) {
		res
			.status(error?.status || 500)
			.json({ status: "FAILED", data: { error: error?.message || error } });
	}
};

const getOneUserById = async (req, res) => {
	try {
		const { userId } = req.params;

		if (!userId) {
			res.status(400).send({
				status: "FAILED",
				data: { error: "Parameter ':userId' can not be empty" },
			});
			return;
		}

		const userById = await UserService.getOneUserById(userId);
		if (userById) res.status(200).json({ status: "OK", data: userById });
		res.status(404).send({
			status: "FAILED",
			data: { error: "Not found" },
		});
	} catch (error) {
		res
			.status(error?.status || 500)
			.json({ status: "FAILED", data: { error: error?.message || error } });
	}
};

const createNewUser = async (req, res) => {
	try {
		const user = req.body;
		const createUser = await UserService.createNewUser(user);
		res.status(201).json({ status: "OK", data: createUser });
	} catch (error) {
		res
			.status(error?.status || 500)
			.json({ status: "FAILED", data: { error: error?.message || error } });
	}
};

const updateOneUserById = async (req, res) => {
	try {
		const { userId } = req.params;
		const userInfo = req.body;

		const userById = await UserService.getOneUserById(userId);
		if (!userById) {
			res.status(404).send({
				status: "FAILED",
				data: { error: "Not found" },
			});
			return;
		}
		await UserService.updateOneUserById(userId, userInfo);
		res.status(200).json({ status: "OK", data: `User ${userId} updated` });
	} catch (error) {
		res
			.status(error?.status || 500)
			.json({ status: "FAILED", data: { error: error?.message || error } });
	}
};

const deleteOneUserById = async (req, res) => {
	try {
		const { userId } = req.params;

		if (!userId) {
			res.status(400).json({
				status: "FAILED",
				data: { error: "Parameter ':userId' can not be empty" },
			});
			return;
		}

		const userById = await UserService.getOneUserById(userId);
		if (!userById) {
			res.status(404).send({
				status: "FAILED",
				data: { error: "Not found" },
			});
			return;
		}
		await UserService.deleteOneUserById(userId);
		res.status(200).json({ status: "OK", data: `Product ${userId} deleted` });
	} catch (error) {
		res
			.status(error?.status || 500)
			.json({ status: "FAILED", data: { error: error?.message || error } });
	}
};

module.exports = {
	loginUser,
	getAllUsers,
	getOneUserById,
	createNewUser,
	updateOneUserById,
	deleteOneUserById,
};
