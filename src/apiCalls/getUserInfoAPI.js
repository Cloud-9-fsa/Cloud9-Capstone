export const getUserInfo = async (token) => {
  try {
    const response = await fetch(`/api/users/info`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
