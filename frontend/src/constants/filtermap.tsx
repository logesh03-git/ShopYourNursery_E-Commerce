export const size = {
  title: "Plant Size",
  type: "size",
  value: ["small", "medium", "large"],
};
export const price = {
  title: "Price",
  type: "price",
  value: ["0-30", "30-60", "60-100", "100-INF"],
};
export const place = {
  title: "Indoor/Outdoor",
  type: "place",
  value: ["Indoor", "Outdoor", "Pet Friendly"],
};
export const customerRating = {
  title: "Customer Rating",
  type: "rating",
  value: [5, 4, 3, 2, 1],
};

const filtermap = [size, price, place, customerRating];
export default filtermap;
