export const updateListing = async ({
  listingId,
  token,
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
}) => {
  try {
    const response = await fetch(`/api/listings/${listingId}`, {
      method: "PATCH",
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
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
