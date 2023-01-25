export async function addListingToOrder(orderId, listingId) {
  try {
    const response = await fetch(`/api/order-listings/listings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId,
        listingId,
      }),
    });
  } catch (error) {
    console.error(error);
  }
}
