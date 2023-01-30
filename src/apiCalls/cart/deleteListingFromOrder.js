export async function deleteListingFromOrder(listingId, orderId) {
  try {
    const response = await fetch(
      `/api/orderlistings/delete/${orderId}/${listingId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
