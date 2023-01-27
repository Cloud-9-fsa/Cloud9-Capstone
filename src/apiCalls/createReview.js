export async function createReview(
  listingId,
  userId,
  firstname,
  lastname,
  title,
  description,
  rating
) {
  try {
    const response = await fetch(`/api/reviews/${listingId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        firstname,
        lastname,
        title,
        description,
        rating,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error;
  }
}
