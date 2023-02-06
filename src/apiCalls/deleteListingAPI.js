export async function deleteListing(listingId, token) {
  try {
    const response = await fetch(`/api/listings/delete/${listingId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
