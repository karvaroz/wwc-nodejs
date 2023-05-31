const io = require("socket.io")(3001, {
	cors: {
		origin: "*",
	},
});

io.on("connection", (socket) => {
	socket.on("offer", (payload) => {
		console.log("Offer received: ", payload);
		socket.emit("Update", payload);
	});

	socket.on("disconnect", () => {
		console.log("Connection disconnected");
	});

	socket.emit("Close", () => {
		console.log("Connection closed");
	});
});
