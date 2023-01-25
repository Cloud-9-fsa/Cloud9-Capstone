export const listings = async () => {
  try {
    const response = await fetch(`/api/listings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("THIS IS MY DATA", data);
    return data;
  } catch (error) {
    throw error;
  }
};
