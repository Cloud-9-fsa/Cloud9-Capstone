const { Client } = require("pg");
require("dotenv").config();

const DB_NAME = "cloud9";

const DB_URL = process.env.DATABASE_URL || `https://localhost:5432/${DB_NAME}`;

let client;

// github actions client config
if (process.env.CI) {
  client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "postgres",
  });
} else {
  client = new Client(DB_URL);
}

module.exports = client;
