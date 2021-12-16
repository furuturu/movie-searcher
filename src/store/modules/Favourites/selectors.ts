import { TRootState } from "../../store";

export const selectFavouriteMovies = (state: TRootState) =>
  state.favourite.movies;
export const selectFavouriteSeries = (state: TRootState) =>
  state.favourite.series;
