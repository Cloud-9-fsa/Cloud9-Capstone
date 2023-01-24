const express = require("express");
const router = express.Router();
const { getAllListings, getListingByCategory } = require("../db");
const { requireUser } = require("./utils");

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
    req.send(listings);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
