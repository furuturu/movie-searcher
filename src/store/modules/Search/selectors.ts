import { TRootState } from "../../store";

export const selectQueries = (state: TRootState) => state.search.queries;
