export async function deleteListing(ListingId, token) {
  try {
    const response = await fetch(`/api/listings/delete/${ListingId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error;
  }
}
