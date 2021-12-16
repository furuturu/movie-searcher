import { TRootState } from "../../store";

export const selectAppType = (state: TRootState) => state.preferences.appType;
export const selectLanguage = (state: TRootState) => state.preferences.language;
