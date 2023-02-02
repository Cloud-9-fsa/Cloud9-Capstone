export async function editOrder(orderId, id, quantity) {
  try {
    const response = await fetch(`/api/orderlistings/listings/quantity`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        quantity,
        orderId,
      }),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}
