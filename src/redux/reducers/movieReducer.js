import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
  loading: true,
  genreList: [],
};
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getAllMovies(state, action) {
      state.popularMovies = action.payload.popularMovies;
      state.topRatedMovies = action.payload.topRatedMovies;
      state.upComingMovies = action.payload.upComingMovies;
      state.loading = false;
      state.genreList = action.payload.genreList;
    },
    getMovieRequest(state, action) {
      state.loading = true;
    },
    getMovieFalure(state, action) {
      state.loading = false;
    },
  },
});

export const movieActions = movieSlice.actions;
export default movieSlice.reducer;
