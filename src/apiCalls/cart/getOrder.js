export async function getOrder(userId, isActive) {
  try {
    const response = await fetch(`/api/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        isActive,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
