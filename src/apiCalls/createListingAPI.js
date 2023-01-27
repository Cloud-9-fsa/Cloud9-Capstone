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
  stock
) {
  try {
    const response = await fetch(`/api/listings/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
    console.error;
  }
}
