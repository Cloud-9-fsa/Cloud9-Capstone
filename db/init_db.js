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
      image:
        "https://images.unsplash.com/photo-1581888475780-27b6b0bc3690?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
      name: "The Modern Dog",
      description:
        "This extremely cozy and soft pillow bed will give any pooch the proper slumber. This square-shaped pet pillow has a flat surface that gives your pup plenty of room to sprawl out. The fluffy polyester fiber filling provides maximum comfort while its sleek design compliments the decor of any home. Fabric is machine washable. ",
      category: "Pet Pillows",
      price: 350,
      stock: 100,
    });

    await createListing({
      isHot: false,
      image:
        "https://cdn.shopify.com/s/files/1/0616/1331/0131/products/0c8c4e6eddb70f14e41f7aa38dd05400_1080x.jpg?v=1666880239", "https://cdn.shopify.com/s/files/1/0616/1331/0131/products/d6ff1364b24e95414a9d28ba2c1cea1f_1080x.jpg?v=1666880239",
      name: "Luxury in the Banana Boat",
      description:
        "Does your cat love to sleep in weird places? Huddled under a basket of clothes or the classic cardboard box? Why not have her sprawled out in a luxury banana bed. Its plush memory foam perfectly pairs with it's cave-like warmth. This luxury fruit boat will make any gump into a cheery kitty again.",
      category: "Pet Pillows",
      price: 300,
      stock: 100,
    });

    await createListing({
      isHot: true,
      image: "https://m.media-amazon.com/images/I/51BjFYmiUtL._AC_SX679_.jpg","https://m.media-amazon.com/images/I/81zPcrN6m+L._AC_SX679_.jpg",
      name: "The Donut",
      description:
        "This soft faux shag fur will keep both cats and dogs comfortable at night. The extra filling will provide relieft from join and mucle pain, while it's circular design allows extreme comfort to the pets who like to curl into a ball. Not only does this pillow has a water-resistant nylon bottom that keeps your floors safe in case of an accident, it is machine washable. Available in two colors: fancy white or steel grey.",
      category: "Pet Pillows",
      price: 100,
      stock: 100,
    });

    await createListing({
      isHot: false,
      image: "https://images.unsplash.com/photo-1583512603866-910c8542ba1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80",
      name: "The Arizona Cactus",
      description:
        "To the pets who like to camp under the stars or slumber in a small nook, we have found the perfect bed for them. Inside, the memory-foam pillow is made with the highest quality - ensuring every paw can stetch out perfectly. It's tall ceilings will create a cozy illusion, while the cactus print showcase its bohemian vibes. Yes, your pet is too cool for you, but at least they can sleep in secure style. ",
      category: "Pet Pillows",
      price: 100,
      stock: 100,
    });

    await createListing({
      isHot: false,
      image: "https://cb.scene7.com/is/image/Crate/CresteCrdryIvoryPillowsFSSF22/$web_pdp_main_carousel_high$/220818095037/creste-ivory-corduroy-throw-pillows-by-athena-calderone.jpg",
      name: "The Ivory Throw Collection",
      description:
        "XXX living room",
      category: "Decorative Pillows",
      price: 100,
      stock: 100,
    });

    await createListing({
      isHot: false,
      image: "https://cb.scene7.com/is/image/Crate/SkaColorblckVlvLn23PlwsFSSF22/$web_pdp_main_carousel_high$/220816143327/ska-23-colorblock-velvet-linen-pillows.jpg",
      name: "The Arizona Velvet",
      description:
      "XXX bedroom and living room",
      category: "Decorative Pillows",
      price: 100,
      stock: 100,
    });

    await createListing({
      isHot: false,
      image: "https://cb.scene7.com/is/image/Crate/PeruvianLlamaPillowSSS21/$web_pdp_main_carousel_high$/201209113320/peruvian-llama-pillow.jpg",
      name: "The Peruvian Llama",
      description:
      "XXX - kids ",      
      category: "Decorative Pillows",
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
