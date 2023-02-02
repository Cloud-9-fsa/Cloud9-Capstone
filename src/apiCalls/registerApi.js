export const registerUser = async (
  email,
  password,
  address,
  firstname,
  lastname
) => {
  try {
    const response = await fetch(`/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, firstname, lastname, address }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
