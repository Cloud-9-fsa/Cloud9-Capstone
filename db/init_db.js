const {
  client,
  createAdminUser,
  createListing,
  getAllListings,
  createOrders,
  createOrderListings,
  getOrderListingByListingId,
  createReviews,
  getReviewsByUser,
  createReviewListings,
  getReviewsByListingId,
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
    image VARCHAR(500),
    image2 VARCHAR(500),
    image3 VARCHAR(500),
    image4 VARCHAR(500),
    image5 VARCHAR(500),
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
        firstname VARCHAR(255) NOT NULL,
        lastname VARCHAR(255) NOT NULL,
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
      UNIQUE ("orderId","listingId"),
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
      email: "solan.jellena@gmail.com",
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
      category: "Pet",
      price: 350,
      stock: 100,
    });

    await createListing({
      isHot: false,
      image:
        "https://cdn.shopify.com/s/files/1/0616/1331/0131/products/0c8c4e6eddb70f14e41f7aa38dd05400_1080x.jpg?v=1666880239",
      image2:
        "https://cdn.shopify.com/s/files/1/0616/1331/0131/products/d6ff1364b24e95414a9d28ba2c1cea1f_1080x.jpg?v=1666880239",
      name: "Luxury in the Banana Boat",
      description:
        "Does your cat love to sleep in weird places? Huddled under a basket of clothes or the classic cardboard box? Why not have her sprawled out in a luxury banana bed. Its plush memory foam perfectly pairs with it's cave-like warmth. This luxury fruit boat will make any gump into a cheery kitty again.",
      category: "Pet",
      price: 300,
      stock: 100,
    });

    await createListing({
      isHot: true,
      image: "https://m.media-amazon.com/images/I/51BjFYmiUtL._AC_SX679_.jpg",
      image2: "https://m.media-amazon.com/images/I/81zPcrN6m+L._AC_SX679_.jpg",
      name: "The Donut",
      description:
        "This soft faux shag fur will keep both cats and dogs comfortable at night. The extra filling will provide relieft from join and mucle pain, while it's circular design allows extreme comfort to the pets who like to curl into a ball. Not only does this pillow has a water-resistant nylon bottom that keeps your floors safe in case of an accident, it is machine washable. Available in two colors: fancy white or steel grey.",
      category: "Pet",
      price: 100,
      stock: 100,
    });

    await createListing({
      isHot: false,
      image:
        "https://images.unsplash.com/photo-1583512603866-910c8542ba1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80",
      name: "The Arizona Cactus",
      description:
        "To the pets who like to camp under the stars or slumber in a small nook, we have found the perfect bed for them. Inside, the memory-foam pillow is made with the highest quality - ensuring every paw can stetch out perfectly. It's tall ceilings will create a cozy illusion, while the cactus print showcase its bohemian vibes. Yes, your pet is too cool for you, but at least they can sleep in secure style. ",
      category: "Pet",
      price: 100,
      stock: 100,
    });

    await createListing({
      isHot: false,
      image:
        "https://cb.scene7.com/is/image/Crate/CresteCrdryIvoryPillowsFSSF22/$web_pdp_main_carousel_high$/220818095037/creste-ivory-corduroy-throw-pillows-by-athena-calderone.jpg",
      name: "The Ivory Throw Collection",
      description:
        "With this ribbing texture, the Ivory Collection is meant to live in any home. It's simplicity and minimalistic design will enhance any space of the house.",
      category: "Decorative",
      price: 100,
      stock: 100,
    });

    await createListing({
      isHot: false,
      image:
        "https://cb.scene7.com/is/image/Crate/SkaColorblckVlvLn23PlwsFSSF22/$web_pdp_main_carousel_high$/220816143327/ska-23-colorblock-velvet-linen-pillows.jpg",
      name: "The Arizona Velvet",
      description:
        "The Arizona collection is met with classic pieces that fits any home. It's simplistic color scheme adds a touch of modernism. This works well with any home that strives for the western look. ",
      category: "Decorative",
      price: 100,
      stock: 100,
    });

    await createListing({
      isHot: false,
      image:
        "https://cb.scene7.com/is/image/Crate/PeruvianLlamaPillowSSS21/$web_pdp_main_carousel_high$/201209113320/peruvian-llama-pillow.jpg",
      name: "The Peruvian Llama",
      description:
        "Our prestigious Peruvian collection will grant a magical llama to guide your dreams into the sweetest of slumbers. Recommended for any child who frequently has nightmares.",
      category: "Decorative",
      price: 100,
      stock: 100,
    });

    await createListing({
      isHot: true,
      image:
        "https://images-us-prod.cms.dynamics365commerce.ms/cms/api/cncgmclkfv/imageFileData/search?fileName=/Products%2F134073P%20%5E%20%20%5E%20Twin%20%5E%20Reg%20%5E%20Prime_000_001.png&fallback=/Products/134073P_000_001.png,Product-Fallback-Image.png&m=6&q=80&cropfocalregion=true",
      name: "Memory Foam Mattress",
      description:
        "Our memory foam mattresses uses your own body heat to soften and form to your shape. these mattresses provide incredible support and comfort.",
      category: "Sleep",
      price: 1200,
      stock: 100,
    });
    await createListing({
      isHot: true,
      image:
        "https://cdn.shopify.com/s/files/1/0082/0215/8137/products/Olesilk_Silk_Duvet_Cover-White_7d44b07d-eb3e-4c65-af7d-18e49c3b29ea_1024x1024.jpg?v=1565944836",
      name: "Silk Bed Sheets",
      description:
        "Our silk sheets are made with natural protein fibers which are ideal for your skin. If you truly want to sleep in the clouds these sheets will get you there.",
      category: "Sleep",
      price: 350,
      stock: 100,
    });
    await createListing({
      isHot: true,
      image:
        "https://cdn.shopify.com/s/files/1/0096/4414/6735/products/14_865e2c2d-04ed-4832-85bd-2d3bc9a914db.png?v=1659127341",
      name: "Satin Pillow Case",
      description:
        "Our 100% polyester satin pillowcases help protect your beard from scratches, creases and tugs, helping to reduce split ends and ensuring a night of restorative beard sleep.",
      category: "Sleep",
      price: 75,
      stock: 100,
    });
    await createListing({
      isHot: true,
      image: "https://m.media-amazon.com/images/I/41+O9LK+hgL._SX679_.jpg",
      name: "Foot Pillow",
      description:
        "This pillow provides effective pain relief for those who sit for hours. Raising your feet at the desk promotes good sitting posture. Dont't let your feet suffer a long days work.",
      category: "Sleep",
      price: 150,
      stock: 100,
    });
    await createListing({
      isHot: true,
      image:
        "https://cdn.shopify.com/s/files/1/0064/3262/0633/products/Base-Cover-White_Cuddler-Cover_3_800x.jpg?v=1663071074",
      name: "Body Pillow",
      description:
        "For all of the side sleepers out there this pillow was designed with you in mind. If you're tired of waking up with your shoulders and hips hurting this pillow can provide the support you need to combat that wake up pain. You'll find yourself awaking to a fully rested body without changing your sleeping style.",
      category: "Sleep",
      price: 350,
      stock: 100,
    });
    await createListing({
      isHot: true,
      image:
        "https://u7q2x7c9.stackpathcdn.com/photos/19/13/312814_27335_L.jpg",
      name: "Inflatable Outdoor Pillow",
      description:
        "This inflatable pillow will fit snug in your bag so that you can sleep snug at night.",
      category: "Outdoor",
      price: 50,
      stock: 100,
    });
    await createListing({
      isHot: true,
      image:
        "https://i5.walmartimages.com/asr/215acf2b-6f5a-4db4-aee3-5519a208e62d.6980b99244dba6ed6aa42d25a211fcfd.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      name: "Compressed Pillow",
      description:
        "Few emergency pillows come close to matching the comfort of our compressed pillow. It can fit in any bag and takes up less space than a flashlight.",
      category: "Outdoor",
      price: 75,
      stock: 100,
    });
    await createListing({
      isHot: true,
      image:
        "https://www.rei.com/dam/content_team_081417_71478_choosing_sleeping_pads_lg.jpg",
      name: "Sleeping Pad",
      description:
        "This outdoor necessity will keep you comfortable on any surface you choose. Our sleeping pad has built in pillows and is made for even the most unforgiving of surfaces.",
      category: "Outdoor",
      price: 300,
      stock: 100,
    });
    await createListing({
      isHot: true,
      image:
        "https://www.rei.com/media/4803360b-285f-4f6c-b1b1-e8b90fab379b?size=784x588",
      name: "Extreme Camping Pillow",
      description:
        "This pillow can take whatever the wild has to throw at it. Whether it's weather or terrain nothing can keep you from having comfort in your bag. This pillow will outlast you.",
      category: "Outdoor",
      price: 200,
      stock: 100,
    });
    await createListing({
      isHot: true,
      image:
        "https://images.accentuate.io/?c_options=w_1000&shop=lujo-world.myshopify.com&image=https://cdn.accentuate.io/4486790905943/11923480936535/XL-Floor-Cushion-detail3-v1588198820385.jpg?1920x1920",
      name: "Outdoor Comfort Pillow",
      description:
        "If you want to bring the comforts of home with you during your adventures, then this pillow was made for you. It may not be meant for the extremes that the outdoors can throw at you, but it can make a light camping trip feel not so far from home.",
      category: "Outdoor",
      price: 100,
      stock: 100,
    });
    await createListing({
      isHot: true,
      image:
        "https://cdn.shopify.com/s/files/1/2061/3133/products/chillbo_shwaggins_inflatable_lounger_air_couch_inflatable_chair1_copy_2048x2048.jpg?v=1654054126",
      name: "Inflatable Lounger",
      description:
        "Designed for comfort, the Inflatable Lounger provides all the support needed to chill anywhere, anytime.",
      category: "Outdoor",
      price: 250,
      stock: 100,
    });
    await createListing({
      isHot: true,
      image:
        "https://images.squarespace-cdn.com/content/v1/522005d3e4b005122eb8eb5e/1448399907214-HW04YZZ0XDQ5CRN3XCSB/image-asset.jpeg",
      name: "Cinder Block",
      description:
        "If you feel like your day wasn't hard enough, we invite you to try out our cinder block pillow. Our cinder blocks are cut to order. Stop worrying about having a good nights rest and make sure you have a bad one with our product.",
      category: "Accessories",
      price: 250,
      stock: 100,
    });
    await createListing({
      isHot: true,
      image:
        "https://t4.ftcdn.net/jpg/02/31/24/03/360_F_231240361_FbSf7C5eLLmRdmejQw3enbjRyqPmFXlK.jpg",
      name: "Bundle of Sticks",
      description:
        "All of our sticks are locally sourced. If you've ever wondered what it was like to sleep on the forest floor, this pillow is for you. With this pillow you will go to bed uncomfortably and wake up feeling like a caveman. Comfort is for the weak, be strong, sleep on sticks.",
      category: "Accessories",
      price: 50,
      stock: 100,
    });
    await createListing({
      isHot: true,
      image:
        "https://previews.123rf.com/images/alexan66/alexan661211/alexan66121100025/16177176-sack-of-soil-and-peat-pot.jpg",
      name: "Sack of Dirt",
      description:
        "Have you ever woke up early in the morning and stepped outside to smell the earthy air? We wanted to bring that refreshing smell to you while you slip off to dreamland. We introduce our bag of dirt. Our dirt is harvested from just outside of out shipping facilities. The bags are made from 100% sun-dried wool. We promise we will never not have these pillows in stock.",
      category: "Accessories",
      price: 350,
      stock: 100,
    });
    await createListing({
      isHot: true,
      image:
        "https://images.squarespace-cdn.com/content/v1/6054d185e94f5975342c7d5e/f1b4fa36-475b-4dbb-820c-e76cbffcfd98/The+Eliza+Jane+Hotel+Lobby+Pillows.jpg",
      name: "Stolen Hotel Lobby Pillow",
      description:
        "Our team went on a company retreat and came back with pillows from every hotel we could find. Though we can't provide the names of the hotels we can tell you that these pillows are seemingly comfortable and overpriced.",
      category: "Accessories",
      price: 12000,
      stock: 100,
    });
    await createListing({
      isHot: true,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQkGDnSqqvytFeKFa71rlBegkDMr0Pildy5Q&usqp=CAU",
      name: "Water Pillow",
      description:
        "You may have heard of a water bed, but I'm guessing you've never heard of a water pillow. Our water pillows bring all of the joy of a water bed into a smaller inconveniet size. Water balloons don't have anything on this pillow. Please buy them, we made too many.",
      category: "Accessories",
      price: 350,
      stock: 100,
    });

    await createReviews({
      title: "First Title",
      firstname: "moe",
      lastname: "ayyad",
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
