const client = require("../client");

const capitalName = (name) => {
  const result = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  return result;
};

async function createListing({
  isHot,
  image,
  image2,
  image3,
  image4,
  image5,
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
      INSERT INTO listings ("isHot", image, image2,image3,image4,image5, 
      name, description, category, price, stock) VALUES($1,$2,$3,$4,$5,$6,$7, $8, $9, $10, $11)
      RETURNING *`,
      [
        isHot,
        image,
        image2,
        image3,
        image4,
        image5,
        name,
        description,
        capitalName(category),
        price,
        stock,
      ]
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

async function getListingById(id) {
  try {
    const { rows: listings } = await client.query(
      `
      SELECT * FROM listings
      WHERE id = $1`,
      [id]
    );

    return attachReviewsToListings(listings);
  } catch (error) {
    console.error(error);
  }
}

async function deleteListing(id) {
  try {
    await client.query(
      `
        DELETE FROM review_listings
        WHERE "listingId" = $1
        RETURNING *;
        `,
      [id]
    );

    await client.query(
      `
        DELETE FROM reviews
        WHERE id = $1
        RETURNING *;
        `,
      [id]
    );

    const { rows } = await client.query(
      `
        DELETE FROM listings
        WHERE id = $1
        RETURNING *;
        `,
      [id]
    );
    return rows;
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
      [capitalName(category)]
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
  getListingById,
};
