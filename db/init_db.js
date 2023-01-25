const {
  client,
  createUser,
  getAllUsers,
  createAdminUser,
  updateUser,
  getUserById,
  createListing,
  getAllListings,
  deleteListing,
  getListingByCategory,
  getListingByIsHot,
  getListingByName,
  getListingByPrice,
  createOrders,
  getOrdersById,
  getOrdersByIsActive,
  getOrdersByUserIsActive,
  createOrderListings,
  updateOrderListings,
  getOrderListingById,
  getOrderListingByListingId,
  createReviews,
  getReviewsByUser,
  deleteReviews,
  createReviewListings,
  getReviewsByListingId,
  attachReviewsToListings,
  makeOrderInactive,
} = require("./");

async function buildTables() {
  try {
    client.connect();
    await client.query(`
    DROP TABLE IF EXISTS order_listings;
    DROP TABLE IF EXISTS review_listings;
    DROP TABLE IF EXISTS orders;
    DROP TABLE IF EXISTS reviews;
    DROP TABLE IF EXISTS users;
    DROP TABLE IF EXISTS listings;
`);

    await client.query(`
  CREATE TABLE listings(
    id SERIAL PRIMARY KEY,
    "isHot" BOOLEAN DEFAULT false,
    image VARCHAR(255),
    name VARCHAR(255) UNIQUE NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    price INTEGER NOT NULL,
    stock INTEGER NOT NULL DEFAULT 100
    );


    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      firstname VARCHAR(255) NOT NULL,
      lastname VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      "isAdmin" BOOLEAN DEFAULT false
    );

      CREATE TABLE reviews(
        id SERIAL PRIMARY KEY,
        "userId" INTEGER REFERENCES users(id),
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        rating SMALLINT NOT NULL CHECK(rating BETWEEN 1 AND 5)
      );


    CREATE TABLE orders(
      id SERIAL PRIMARY KEY,
      "userId" INTEGER REFERENCES users(id),
      "isActive" BOOLEAN DEFAULT true,
      total INTEGER DEFAULT 0

    );


    CREATE TABLE review_listings(
      id SERIAL PRIMARY KEY,
      "reviewId" INTEGER REFERENCES reviews(id),
      "listingId" INTEGER REFERENCES listings(id)

    );

    CREATE TABLE order_listings(
      id SERIAL PRIMARY KEY,
      "orderId" INTEGER REFERENCES orders(id),
      "listingId" INTEGER REFERENCES listings(id),
      quantity INTEGER DEFAULT 1

    );

 `);
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    await createAdminUser({
      email: "hamoodaayyad@gmail.com",
      password: "FullstackRocks",
      firstname: "moe",
      lastname: "ayyad",
      address: "louisiana",
    });
    await createAdminUser({
      email: "rahmatbak95@gmail.com",
      password: "FullstackRocks",
      firstname: "Rahmat",
      lastname: "Bakhshi",
      address: "Ohio",
    });
    await createAdminUser({
      email: "Solan.jellena@gmail.com",
      password: "FullstackRocks",
      firstname: "Jellena",
      lastname: "Solan",
      address: "New Jersey",
    });
    await createAdminUser({
      email: "chasepettypiece@gmail.com",
      password: "FullstackRocks",
      firstname: "Christopher",
      lastname: "pettypiece",
      address: "Oklahoma",
    });

    await createListing({
      isHot: true,
      image: "https://unsplash.com/photos/hcB2HnGxXpg",
      name: "Luxury Dog Pillow",
      description: "Your pooch will snooze like never before!",
      category: "Pet Pillows",
      price: 350,
      stock: 100,
    });

    await createListing({
      isHot: true,
      image: "https://cdn.mos.cms.futurecdn.net/YxjQB5hE5ScQgYWKTgk2b5.jpg",
      name: "Luxury Cat Pillow",
      description: "Your cat will snooze like never before!",
      category: "Pet Pillows",
      price: 300,
      stock: 100,
    });

    await createListing({
      isHot: false,
      image: "https://unsplash.com/photos/hcB2HnGxXpg",
      name: "Memory Foam Pillow",
      description: "memoryfoam!",
      category: "Pet Pillows",
      price: 100,
      stock: 100,
    });

    await createOrders(1);

    await createOrderListings(1, 1);
    await getOrderListingByListingId(1);
    await createReviews({
      title: "First Title",
      userId: 1,
      description: "This is the description",
      rating: 5,
    });
    await getReviewsByUser(1);
    // await deleteReviews(1, 1);
    await createReviewListings(1, 1);
    await getReviewsByListingId(1);
    await getAllListings();
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
