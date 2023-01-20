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

    return listings;
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
    const {
      rows: [listing],
    } = await client.query(
      `
      SELECT * FROM listings 
      WHERE category =$1`,
      [category]
    );
    return listing;
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

    return listing;
  } catch (error) {
    console.error(error);
  }
}

async function getListingByIsHot(isHot) {
  try {
    const {
      rows: [listing],
    } = await client.query(
      `
      SELECT * FROM listings 
      WHERE "isHot" =$1`,
      [isHot]
    );

    return listing;
  } catch (error) {
    console.error(error);
  }
}

async function getListingByPrice(price) {
  try {
    const {
      rows: [listing],
    } = await client.query(
      `
      SELECT * FROM listings 
      WHERE price =$1`,
      [price]
    );

    return listing;
  } catch (error) {
    console.error(error);
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
