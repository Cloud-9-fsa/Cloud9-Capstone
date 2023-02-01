export async function getOrder(token) {
  try {
    const response = await fetch(`/api/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    const sortedListings = data[0].listings.sort((a, b) =>
      a.id > b.id ? 1 : -1
    );
    data.listings = sortedListings;
    return data;
  } catch (error) {
    console.error(error);
  }
}
