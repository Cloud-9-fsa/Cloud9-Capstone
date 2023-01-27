export async function deleteReview(reviewId) {
  try {
    const response = await fetch(`/api/reviews/${reviewId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error;
  }
}
