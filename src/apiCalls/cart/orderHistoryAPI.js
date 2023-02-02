export async function getOrderHistory(token) {
  try {
    const response = await fetch(`/api/orders/history`, {
      method: "GET",
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
