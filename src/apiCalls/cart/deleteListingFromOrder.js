export async function deleteListingFromOrder(listingId, orderId) {
  try {
    const response = await fetch(`/api/orderlistings/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        orderId,
        listingId,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error;
  }
}
