export async function getOrderById(id) {
  try {
    const response = await fetch(`/api/orders/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data[0] && data[0].listings) {
      const sortedListings = data[0].listings.sort((a, b) =>
        a.id > b.id ? 1 : -1
      );
      data.listings = sortedListings;
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}
