const mongoose = require("mongoose");

const Product = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
			required: false,
		},
		quantity: {
			type: Number,
			required: false,
			default: 0,
		},
		price: {
			type: Number,
			required: false,
			default: 0,
		},
		category: {
			type: String,
			enum: ["Category1", "Category2"],
			default: "Category1",
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Product", Product);
