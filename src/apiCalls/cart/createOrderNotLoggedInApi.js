export async function createOrderNotLogged() {
  try {
    const response = await fetch(`/api/orders/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
