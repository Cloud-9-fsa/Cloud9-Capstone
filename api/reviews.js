const express = require("express");
const { createReviews, createReviewListings, deleteReviews } = require("../db");
const { requireUser } = require("./utils");
const router = express.Router();

router.post("/:listingId", requireUser, async (res, req, next) => {
  const { listingId } = req.params;
  const { userId, firstname, lastname, title, description, rating } = req.body;
  try {
    const review = await createReviews({
      userId,
      firstname,
      lastname,
      title,
      description,
      rating,
    });
    console.log(review);

    const reviewListing = await createReviewListings(review.id, listingId);

    res.send(reviewListing);
  } catch (error) {
    next(error);
  }
});

router.delete("/:reviewId", requireUser, async (req, res, next) => {
  const { reviewId } = req.params;
  try {
    const deletedReview = deleteReviews(reviewId);
    res.send(deletedReview);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
