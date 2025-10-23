import api from "./api";

export const getEstablishments = async () => {
  const response = await api.get("/establishments");
  return response.data.establishments;
};

export const getEstablishmentById = async (id) => {
  const response = await api.get(`/establishments/${id}`);
  return response.data;
};
