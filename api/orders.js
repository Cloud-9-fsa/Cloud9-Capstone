const express = require("express");
const { getOrdersByUserIsActive } = require("../db");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const { userId, isActive } = req.body;
  try {
    const orders = await getOrdersByUserIsActive(isActive, userId);
    res.send(orders);
  } catch (next) {
    next(error);
  }
});
