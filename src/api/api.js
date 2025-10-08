import axios from "axios";
import { env } from "../utils";

const { API_URL } = env;

const api = axios.create({
  baseURL: API_URL,
});

export default api;
