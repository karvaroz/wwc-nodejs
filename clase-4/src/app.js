require("dotenv").config();

const express = require("express");

const AppRouter = require("./routes/product.routes");
const { dbConnection } = require("./database/config");
const ErrorHandler = require("./middlewares/errorHandler");

PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use("/api/v1/products", AppRouter);

app.use(ErrorHandler);

const start = async () => {
	try {
		await dbConnection();
		app.listen(PORT, () => {
			console.log(`🚀 App listening on ${PORT}`);
		});
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

start();
