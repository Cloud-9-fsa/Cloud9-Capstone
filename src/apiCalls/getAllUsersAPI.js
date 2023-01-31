export const fetchAllUsers = async (token) => {
  try {
    const response = await fetch(`/api/users/allusers`, {
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
};
