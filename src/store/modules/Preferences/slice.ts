import { createSlice } from "@reduxjs/toolkit";
import { IInitialSettings } from "./types";

const initialSettings: IInitialSettings = {
  language: "en-US",
  appType: "movie",
};
export const preferencesSlice = createSlice({
  name: "preferences",
  initialState: initialSettings,
  reducers: {
    changeLanguage(state, action) {
      state.language = action.payload;
    },
    changeAppType(state, action) {
      state.appType = action.payload;
    },
  },
});
export const { changeLanguage, changeAppType } = preferencesSlice.actions;
