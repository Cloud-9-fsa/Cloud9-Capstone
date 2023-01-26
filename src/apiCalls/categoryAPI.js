export const fetchCategories = async (category) => {
  try {
    const response = await fetch(`/api/listings/${category}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
