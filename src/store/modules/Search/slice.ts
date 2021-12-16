import { createSlice } from "@reduxjs/toolkit";
import { IInitialSearch } from "./types";

const initialSearch: IInitialSearch = {
  queries: [],
};
export const searchSlice = createSlice({
  name: "search",
  initialState: initialSearch,
  reducers: {
    addQuery(state, action) {
      state.queries.push(action.payload);
    },
    removeQuery(state, action) {
      state.queries = state.queries.filter(
        (query) => query.id !== action.payload
      );
    },
    clearQueries(state) {
      state.queries = [];
    },
  },
});
export const { addQuery, removeQuery, clearQueries } = searchSlice.actions;
