const client = require("../client");

async function createReviewListings(reviewId, listingId) {
  try {
    const {
      rows: [reviewListings],
    } = await client.query(
      `
          INSERT INTO review_listings ("reviewId", "listingId") VALUES($1, $2)
          RETURNING *`,
      [reviewId, listingId]
    );
    return reviewListings;
  } catch (error) {
    console.error(error);
  }
}

async function getReviewsByListingId(id) {
  try {
    const { rows: reviewListings } = await client.query(
      `
          SELECT * FROM review_listings
          WHERE id =$1`,
      [id]
    );
    return reviewListings;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  createReviewListings,
  getReviewsByListingId,
};
