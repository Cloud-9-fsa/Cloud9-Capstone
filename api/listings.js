const express = require("express");
const router = express.Router();
const {
  getAllListings,
  getListingByCategory,
  createListing,
  deleteListing,
  getListingById,
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

router.get("/:listingId", async (req, res, next) => {
  const { listingId } = req.params;
  try {
    const listings = await getListingById(listingId);
    res.send(listings);
  } catch (error) {
    next(error);
  }
});

router.get("/:category", async (req, res, next) => {
  const { category } = req.params;
  try {
    const listings = await getListingByCategory(category);
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
