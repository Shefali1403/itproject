import axios from "axios";
export async function getAllProducts() {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
}
export async function getCategories() {
  const res = await axios.get("https://fakestoreapi.com/products/categories");
  return res.data;
}
export async function getProductsFromCategory(category) {
  const res = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return res.data;
}
