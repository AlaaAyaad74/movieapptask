import axios from "axios";

export const api = {
  getPagesNum: async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=b880f5572429a4a4a406b42eed9e412c`
    );
    console.log(response.data.total_pages);
    return response.data.total_pages;
  },
  getMovies: async (pageNumber: number) => {
    // const response = await axios.get(
    //   `${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    // );
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=b880f5572429a4a4a406b42eed9e412c&page=${pageNumber}`
    );
    return response.data;
  },
  getMovieById: async (movieId: number) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        params: {
          api_key: "b880f5572429a4a4a406b42eed9e412c",
        },
      }
    );
    return response.data;
  },
  searchMovie: async (query: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=b880f5572429a4a4a406b42eed9e412c&query=${query}`
    );
    console.log(response.data);
    return response.data;
  },
};
