const client = require("../client");

const { attachListingsToOrders } = require("./order-listings");

async function createOrders(userId) {
  try {
    const {
      rows: [orders],
    } = await client.query(
      `
        INSERT INTO orders ("userId") VALUES($1)
        RETURNING *`,
      [userId]
    );
    return orders;
  } catch (error) {
    console.error(error);
  }
}

async function getOrdersById(id) {
  try {
    const { rows: orders } = await client.query(
      `
      SELECT * FROM orders 
      WHERE id =$1`,
      [id]
    );
    return attachListingsToOrders(orders);
  } catch (error) {
    console.error(error);
  }
}

async function getOrdersByIsActive(isActive) {
  try {
    const { rows: orders } = await client.query(
      `
        SELECT * FROM orders 
        WHERE "isActive" =$1`,
      [isActive]
    );

    return attachListingsToOrders(orders);
  } catch (error) {
    console.error(error);
  }
}

async function getOrdersByUserIsActive(isActive, userId) {
  try {
    const { rows: orders } = await client.query(
      `
        SELECT * FROM orders 
        WHERE "isActive" =$1 AND "userId" =$2`,
      [isActive, userId]
    );
    return attachListingsToOrders(orders);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  createOrders,
  getOrdersById,
  getOrdersByIsActive,
  getOrdersByUserIsActive,
};
