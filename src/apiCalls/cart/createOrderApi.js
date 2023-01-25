import { useAuth } from ".../context/useAuth";

export async function createOrder() {
  const { token } = useAuth();
  try {
    const response = await fetch(`/api/orders`, {
      method: "POST",
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
