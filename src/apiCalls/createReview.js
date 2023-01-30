export async function createReview(
  listingId,
  userId,
  firstname,
  lastname,
  title,
  description,
  rating,
  token
) {
  try {
    console.log(listingId);
    const response = await fetch(`/api/reviews/${listingId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
