export async function createListing(
  isHot,
  image,
  image2,
  image3,
  image4,
  image5,
  name,
  description,
  category,
  price,
  stock,
  token
) {
  try {
    const response = await fetch(`/api/listings/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        isHot,
        image,
        image2,
        image3,
        image4,
        image5,
        name,
        description,
        category,
        price,
        stock,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
