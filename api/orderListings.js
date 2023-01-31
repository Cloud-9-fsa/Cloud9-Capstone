const express = require("express");
const {
  createOrderListings,
  updateOrderListings,
  deleteOrderListing,
} = require("../db");
const router = express.Router();

//////////// Order-Listings \\\\\\\\\\\\
router.post("/Listings", async (req, res, next) => {
  const { orderId, listingId } = req.body;
  try {
    const addListingsToOrder = await createOrderListings(orderId, listingId);
    res.send(addListingsToOrder);
  } catch (error) {
    next(error);
  }
});

router.patch("/Listings/quantity", async (req, res, next) => {
  const { id, quantity, orderId } = req.body;
  try {
    const changeQuantity = await updateOrderListings({ id, quantity, orderId });
    res.send(changeQuantity);
  } catch (error) {
    next(error);
  }
});

router.delete("/delete/:orderId/:listingId", async (req, res, next) => {
  const { orderId, listingId } = req.params;

  try {
    const deleteListings = await deleteOrderListing(orderId, listingId);

    res.send(deleteListings);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
