import { createSlice } from "@reduxjs/toolkit";
import { IFavouriteSlice } from "./types";

const initialFavourite: IFavouriteSlice = {
  movies: [],
  series: [],
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState: initialFavourite,
  reducers: {
    addMovieToFavourite(state, action) {
      state.movies.push(action.payload);
    },
    addTVToFavourite(state, action) {
      state.series.push(action.payload);
    },
    removeMovieFromFavourite(state, action) {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
    removeTVFromFavourite(state, action) {
      state.series = state.series.filter((tv) => tv.id !== action.payload);
    },
  },
});
export const {
  addMovieToFavourite,
  removeMovieFromFavourite,
  addTVToFavourite,
  removeTVFromFavourite,
} = favouriteSlice.actions;
