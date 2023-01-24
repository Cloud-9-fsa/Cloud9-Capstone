const client = require("../client");

async function createListing({
  isHot,
  image,
  name,
  description,
  category,
  price,
  stock,
}) {
  try {
    const {
      rows: [listing],
    } = await client.query(
      `
      INSERT INTO listings ("isHot", image, name, description, category, price, stock) VALUES($1,$2,$3,$4,$5,$6,$7)
      RETURNING *`,
      [isHot, image, name, description, category, price, stock]
    );

    return listing;
  } catch (error) {
    console.error(error);
  }
}

async function getAllListings() {
  try {
    const { rows: listings } = await client.query(`
      SELECT * FROM listings`);

    return attachReviewsToListings(listings);
  } catch (error) {
    console.error(error);
  }
}

async function deleteListing(id) {
  try {
    await client.query(
      `
        DELETE FROM listings
        WHERE id = $1
        `,
      [id]
    );
  } catch (error) {
    console.error(error);
  }
}

async function getListingByCategory(category) {
  try {
    const { rows: listing } = await client.query(
      `
      SELECT * FROM listings 
      WHERE category =$1`,
      [category]
    );
    return attachReviewsToListings(listing);
  } catch (error) {
    console.error(error);
  }
}

async function getListingByName(name) {
  try {
    const {
      rows: [listing],
    } = await client.query(
      `
      SELECT * FROM listings 
      WHERE name =$1`,
      [name]
    );

    return attachReviewsToListings(listing);
  } catch (error) {
    console.error(error);
  }
}

async function getListingByIsHot(isHot) {
  try {
    const { rows: listing } = await client.query(
      `
      SELECT * FROM listings 
      WHERE "isHot" =$1`,
      [isHot]
    );

    return attachReviewsToListings(listing);
  } catch (error) {
    console.error(error);
  }
}

async function getListingByPrice(price) {
  try {
    const { rows: listing } = await client.query(
      `
      SELECT * FROM listings 
      WHERE price =$1`,
      [price]
    );

    return attachReviewsToListings(listing);
  } catch (error) {
    console.error(error);
  }
}

async function attachReviewsToListings(listings) {
  const listingsToReturn = [...listings];

  try {
    const { rows: reviews } = await client.query(`
          SELECT reviews.*, review_listings.id 
          AS "reviewListingId", review_listings."listingId"
          FROM reviews
          JOIN review_listings ON review_listings."reviewId" = reviews.id;
        `);

    for (const listing of listingsToReturn) {
      const reviewsToAdd = reviews.filter(
        (review) => review.listingId === listing.id
      );
      listing.reviews = reviewsToAdd;
    }
    console.log("This is listings to return:", listingsToReturn);
    return listingsToReturn;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createListing,
  getAllListings,
  deleteListing,
  getListingByCategory,
  getListingByIsHot,
  getListingByName,
  getListingByPrice,
};
