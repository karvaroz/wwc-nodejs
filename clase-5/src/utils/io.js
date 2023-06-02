module.exports = (socket) => {
	console.log("Client connected");

	socket.on("message", (data) => {
		console.log("Message received: ", data);
		socket.emit("chat", data);
	});

	socket.emit("Close", () => {
		console.log("Connection closed");
	});
};
