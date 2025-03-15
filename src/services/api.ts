import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY },
});

export const api = {
  getPagesNum: async () => {
    const response = await apiClient.get("/movie/popular");
    return response.data.total_pages;
  },
  getMovies: async (pageNumber: number) => {
    const response = await apiClient.get("/movie/popular", {
      params: { page: pageNumber },
    });
    return response.data;
  },
  getMovieById: async (movieId: number) => {
    const response = await apiClient.get(`/movie/${movieId}`);
    return response.data;
  },
  searchMovie: async (query: string) => {
    const response = await apiClient.get("/search/movie", {
      params: { query },
    });
    return response.data;
  },
};
