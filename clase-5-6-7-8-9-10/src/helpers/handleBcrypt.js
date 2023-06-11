const bcrypt = require("bcryptjs");

const encrypt = async (password) => {
	return await bcrypt.hash(password, 10);
};

const compare = async (plainPassword, hashPassword) => {
	return await bcrypt.compare(plainPassword, hashPassword);
};

module.exports = { encrypt, compare };
