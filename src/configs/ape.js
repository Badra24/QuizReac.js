import axios from "axios";

export const API_URL =
  "https://opentdb.com/api.php?amount=10&category=17&difficulty=hard&type=multiple";

export const axiosInstance = axios.create({
  baseURL: API_URL,
});
