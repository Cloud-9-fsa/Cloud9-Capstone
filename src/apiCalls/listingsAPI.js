export const fetchListings = async () => {
  try {
    const response = await fetch(`/api/listings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
