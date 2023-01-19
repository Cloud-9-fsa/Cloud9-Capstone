const {
  client,
  // declare your model imports here
  // for example, User
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
    stock INTEGER NOT NULL
    );


    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      firstName VARCHAR(255) NOT NULL,
      lastName VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      "isAdmin" BOOLEAN DEFAULT false
    );

      CREATE TABLE reviews(
        id SERIAL PRIMARY KEY,
        "userID" INTEGER REFERENCES users(id),
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        rating SMALLINT NOT NULL CHECK(rating BETWEEN 1 AND 5)
      );


    CREATE TABLE orders(
      id SERIAL PRIMARY KEY,
      "userId" INTEGER REFERENCES users(id),
      "isActive" BOOLEAN DEFAULT true,
      total INTEGER

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
    // create useful starting data by leveraging your
    // Model.method() adapters to seed your db, for example:
    // const user1 = await User.createUser({ ...user info goes here... })
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
