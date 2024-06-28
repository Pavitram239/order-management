const Order = require("../models/order");

const getOrderStatus = (orderDate) => {
  const currentDate = new Date();
  const daysDiff = Math.floor(
    (currentDate - orderDate) / (1000 * 60 * 60 * 24)
  );
  if (daysDiff === 0) {
    return "In Progress";
  } else if (daysDiff === 1) {
    return "Dispatched";
  } else {
    return "Delivered";
  }
};

const getOrders = async (req, res) => {
  let orders;
  try {
    orders = await Order.find();
    if (orders.length > 0) {
      const order = await Order.findById(order._id);
      if (!order) {
        throw new Error("Order not found");
      }
      const newStatus = getOrderStatus(order.orderDate);
      order.status = newStatus;
      await order.save();
    }
  } catch (error) {
    orders = [];
  }
  res.status(200).json(orders);
};

const createOrder = async (req, res) => {
  const order = await Order.create(req.body);
  res.status(201).json(order);
};

module.exports = { getOrders, createOrder };
