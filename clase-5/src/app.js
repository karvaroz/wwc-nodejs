require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const { ProductRouter, UserRouter, AuthRouter } = require("./routes");
const { ErrorHandler, NotFoundHandler } = require("./middlewares");
const { PostgresDB, MongoDB } = require("./database");

const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);

const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
	console.log("Connection in Socket");
	socket.on("disconnect", () => {
		console.log("Connection disconnected");
	});
});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", AuthRouter);
app.use("/api/v1/products", ProductRouter);
app.use("/api/v1/users", UserRouter);

app.use(ErrorHandler);
app.use(NotFoundHandler);

const start = async () => {
	try {
		await MongoDB.dbConnectionMongo();
		await PostgresDB.dbConnectionPostgres();
		server.listen(PORT, () => {
			console.log(`🚀 App listening on ${PORT}`);
		});
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

start();
