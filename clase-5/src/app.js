require("dotenv").config();

const express = require("express");
const { ProductRouter, UserRouter } = require("./routes");

const { ErrorHandler, NotFoundHandler } = require("./middlewares");
const { PostgresDB, MongoDB } = require("./database");

PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use("/api/v1/products", ProductRouter);
app.use("/api/v1/users", UserRouter);

app.use(ErrorHandler);
app.use(NotFoundHandler);

const start = async () => {
	try {
		await MongoDB.dbConnectionMongo();
		await PostgresDB.dbConnectionPostgres();
		app.listen(PORT, () => {
			console.log(`🚀 App listening on ${PORT}`);
		});
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

start();
