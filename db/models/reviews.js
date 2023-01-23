const client = require("../client");

async function createReviews({ userId, title, description, rating }) {
  try {
    const {
      rows: [reviews],
    } = await client.query(
      `
          INSERT INTO reviews ("userId", title, description, rating) VALUES($1, $2, $3, $4)
          RETURNING *`,
      [userId, title, description, rating]
    );
    // console.log("This is reviews:", reviews);
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
    // console.log("This is reviews by user:", reviews);
    return reviews;
  } catch (error) {
    console.error(error);
  }
}

async function deleteReviews(id, userId) {
  try {
    await client.query(
      `
          DELETE FROM reviews
          WHERE id = $1 AND "userId" = $2
          `,
      [id, userId]
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
