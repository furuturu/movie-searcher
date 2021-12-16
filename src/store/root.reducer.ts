import { combineReducers } from "@reduxjs/toolkit";
import { fetchData } from "./services/fetchData";
import { searchQuery } from "./services/searchQuery";
import { favouriteSlice } from "./modules/Favourites/slice";
import { preferencesSlice } from "./modules/Preferences/slice";
import { searchSlice } from "./modules/Search/slice";

export const rootReducer = combineReducers({
  [fetchData.reducerPath]: fetchData.reducer,
  [searchQuery.reducerPath]: searchQuery.reducer,
  favourite: favouriteSlice.reducer,
  preferences: preferencesSlice.reducer,
  search: searchSlice.reducer,
});
