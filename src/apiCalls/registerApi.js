export const registerUser = async (
  email,
  password,
  firstName,
  lastName,
  address
) => {
  try {
    const response = await fetch(`/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, firstName, lastName, address }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
