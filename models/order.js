const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    items: [
      {
        type: String,
      },
    ],
    orderDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["In Progress", "Dispatched", "Delivered"],
      default: "In Progress",
    },
  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("Order", orderSchema);
