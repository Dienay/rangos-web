import api from "./api";

export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data.products;
};

export const getTopProducts = async () => {
  const response = await api.get("/products/top");
  return response.data.topProducts;
};

export const getProductsByEstablishment = async (establishmentId) => {
  const response = await api.get(`/establishments/${establishmentId}/products`);
  return response.data.products;
};
