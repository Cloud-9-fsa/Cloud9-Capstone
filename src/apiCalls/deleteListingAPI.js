export async function deleteListing(ListingId) {
  try {
    const response = await fetch(`/api/listings/listing`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ListingId,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error;
  }
}
