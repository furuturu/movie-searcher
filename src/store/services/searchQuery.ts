import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const API_KEY = process.env.REACT_APP_API_KEY;

export const searchQuery = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: (builder) => ({
    searchForShows: builder.query({
      query: ({ appType, language, query, page }) =>
        `search/${appType}?api_key=${API_KEY}&language=${language}&query=${query}&page=${page}`,
    }),
    searchByParameters: builder.query({
      query: ({ appType, language, sortType, genres, voteMinimum, page }) =>
        `discover/${appType}?api_key=${API_KEY}&language=${language}&sort_by=${sortType}&with_genres=${genres}
        &vote_count.gte=${voteMinimum}&page=${page}`,
    }),
    downloadGenreList: builder.query({
      query: ({ appType, language }) =>
        `genre/${appType}/list?api_key=${API_KEY}&language=${language}`,
    }),
    keywordsForInput: builder.query({
      query: (inputValue) =>
        `search/keyword?api_key=${API_KEY}&query=${inputValue}&page=1`,
    }),
  }),
});
export const {
  useSearchForShowsQuery,
  useSearchByParametersQuery,
  useDownloadGenreListQuery,
  useKeywordsForInputQuery,
} = searchQuery;
