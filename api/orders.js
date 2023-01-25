const express = require("express");
const {
  getOrdersByUserIsActive,
  createOrders,
  makeOrderInactive,
  deleteOrder,
} = require("../db");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const { userId, isActive } = req.body;
  try {
    const orders = await getOrdersByUserIsActive(isActive, userId);
    res.send(orders);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const userId = req.user.id;
  try {
    if (userId) {
      const order = await createOrders(userId);
      res.send(order);
    } else {
      const order = await createOrders(null);
      res.send(order);
    }
  } catch (error) {
    next(error);
  }
});

router.patch("/setactive", async (req, res, next) => {
  const { orderId } = req.body;
  try {
    const oldOrder = await makeOrderInactive(orderId);
    res.send(oldOrder);
  } catch (error) {
    next(error);
  }
});

router.delete("/delete", async (req, res, next) => {
  const { orderId } = req.body;
  try {
    const deletedOrder = await deleteOrder(orderId);
    res.send(deletedOrder);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
