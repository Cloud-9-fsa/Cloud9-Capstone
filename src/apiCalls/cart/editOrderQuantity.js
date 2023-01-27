export async function editOrder(id, quantity) {
  try {
    const response = await fetch(`/api/orderlistings/listings/quantity`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        quantity,
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
