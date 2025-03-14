import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../services/api";
import { MoviesState } from "../interfaces";

//fetch movie function
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (pageNumber: number) => {
    const data = await api.getMovies(pageNumber);
    // console.log(data);
    return data.results;
  }
);
export const fetchPagesnum = createAsyncThunk(
  "movies/fetchPagesnum",
  async () => {
    const totalPages = await api.getPagesNum();
    return totalPages;
  }
);
export const getMovieById = createAsyncThunk(
  "movies/getById",
  async (id: number) => {
    const movie = await api.getMovieById(id);
    return movie;
  }
);
export const searchMovie = createAsyncThunk(
  "movies/searchmovie",
  async (query: string) => {
    const resultSearch = await api.searchMovie(query);
    return resultSearch;
  }
);
const initialState: MoviesState = {
  movies: [],
  movieDetails: null,
  totalPages: 0,
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        console.log("pending");
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
        console.log("fulfilled");
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(fetchPagesnum.fulfilled, (state, action) => {
        state.totalPages = action.payload;
      });
    builder
      .addCase(searchMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload.results;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(searchMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
    builder
      .addCase(getMovieById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMovieById.fulfilled, (state, action) => {
        state.loading = false;
        state.movieDetails = action.payload;
      })
      .addCase(getMovieById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default movieSlice.reducer;
