const client = require("../client");
const bcrypt = require("bcrypt");

async function createUser({ email, password, firstName, lastName, address }) {
  try {
    const SALT_COUNT = 10;
    const hashedPassword = await bcrypt.hash(password, SALT_COUNT);

    const {
      rows: [user],
    } = await client.query(
      `
    INSERT INTO users (email, password, firstName, lastName, address) VALUES($1,$2,$3,$4,$5)
    ON CONFLICT (email) DO NOTHING RETURNING *`,
      [email, hashedPassword, firstName, lastName, address]
    );

    delete user.password;
    return user;
  } catch (error) {
    console.error(error);
  }
}

async function createAdminUser({
  email,
  password,
  firstName,
  lastName,
  address,
}) {
  try {
    const SALT_COUNT = 10;
    const hashedPassword = await bcrypt.hash(password, SALT_COUNT);

    const {
      rows: [user],
    } = await client.query(
      `
    INSERT INTO users (email, password, firstName, lastName, address, "isAdmin") VALUES($1,$2,$3,$4,$5,true)
    ON CONFLICT (email) DO NOTHING RETURNING *`,
      [email, hashedPassword, firstName, lastName, address]
    );

    delete user.password;
    return user;
  } catch (error) {
    console.error(error);
  }
}

async function getUserByEmail({ email }) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    SELECT * FROM users 
    WHERE email =$1`,
      [email]
    );

    return user;
  } catch (error) {
    console.error(error);
  }
}

async function getUser({ email, password }) {
  try {
    const userInfo = await getUserByEmail(email);
    const hashedPassword = userInfo.password;
    const isValid = await bcrypt.compare(password, hashedPassword);
    if (isValid) {
      const {
        rows: [user],
      } = await client.query(
        `
      SELECT * FROM users 
      WHERE email = $1 AND password = $2`,
        [email, hashedPassword]
      );

      if (user) {
        delete user.password;
      }

      return user;
    }
  } catch (error) {
    console.error(error);
  }
}

async function getAllUsers() {
  try {
    const { rows: users } = await client.query(`
    SELECT * FROM users`);

    delete users.password;
    console.log(users);
    return users;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  createUser,
  getAllUsers,
  createAdminUser,
};
