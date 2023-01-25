const express = require("express");
const router = express.Router();
const {
  getAllListings,
  getListingByCategory,
  createListing,
  deleteListing,
} = require("../db");
const { requireUser, requireUserAdmin } = require("./utils");

router.get("/", async (req, res, next) => {
  try {
    const listings = await getAllListings();
    res.send(listings);
  } catch (error) {
    next(error);
  }
});

router.get("/:catagory", async (req, res, next) => {
  const { catagory } = req.params;
  try {
    const listings = await getListingByCategory(catagory);
    res.send(listings);
  } catch (error) {
    next(error);
  }
});

router.post("/create", requireUserAdmin, async (req, res, next) => {
  const { isHot, image, name, description, category, price, stock } = req.body;
  try {
    const createdListing = await createListing({
      isHot,
      image,
      name,
      description,
      category,
      price,
      stock,
    });
    res.send(createdListing);
  } catch (error) {
    next(error);
  }
});

router.delete("/listing", requireUserAdmin, async (req, res, next) => {
  const { listingId } = req.body;
  try {
    const deletedListing = await deleteListing(listingId);
    res.send(deletedListing);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
