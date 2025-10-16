import api from "./api";

export const login = async (body) => {
  const response = await api.post("/login", body);
  return response.data;
};

export const signup = async (body) => {
  const response = await api.post("/signup", body);
  return response.data;
};
