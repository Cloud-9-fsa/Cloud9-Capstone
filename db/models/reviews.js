const client = require("../client");

async function createReviews({
  userId,
  firstname,
  lastname,
  title,
  description,
  rating,
}) {
  try {
    const {
      rows: [reviews],
    } = await client.query(
      `
          INSERT INTO reviews ("userId", firstname, lastname, title, description, rating) VALUES($1, $2, $3, $4,$5,$6)
          RETURNING *`,
      [userId, firstname, lastname, title, description, rating]
    );
    return reviews;
  } catch (error) {
    console.error(error);
  }
}

async function getReviewsByUser(userId) {
  try {
    const { rows: reviews } = await client.query(
      `
          SELECT * FROM reviews 
          WHERE "userId" = $1`,
      [userId]
    );

    return reviews;
  } catch (error) {
    console.error(error);
  }
}

async function deleteReviews(id) {
  try {
    await client.query(
      `
          DELETE FROM review_listings
          WHERE "reviewId" = $1
          `,
      [id]
    );
    await client.query(
      `
          DELETE FROM reviews
          WHERE id = $1
          `,
      [id]
    );
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  createReviews,
  getReviewsByUser,
  deleteReviews,
};
