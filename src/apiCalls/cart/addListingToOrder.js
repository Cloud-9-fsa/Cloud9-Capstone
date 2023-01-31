export async function addListingToOrder(orderId, listingId, quantity) {
  try {
    const response = await fetch(`/api/orderlistings/listings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId,
        listingId,
        quantity,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
