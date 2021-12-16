import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchData = createApi({
  reducerPath: "fetchData",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: (builder) => ({
    contentForSlider: builder.query({
      query: ({ appType, switcherType, language }) =>
        `${appType}/${switcherType}?api_key=${API_KEY}&language=${language}&page=1`,
    }),
    contentForBillboard: builder.query({
      query: ({ appType, language }) =>
        `discover/${appType}/?api_key=${API_KEY}&language=${language}&page=1`,
    }),
    details: builder.query({
      query: ({ appType, id, language }) =>
        `${appType}/${id}?api_key=${API_KEY}&language=${language}&append_to_response=videos,images,reviews,credits`,
    }),
    reviews: builder.query({
      query: ({ appType, id, language }) =>
        `${appType}/${id}/reviews?api_key=${API_KEY}&language=${language}&page=1`,
    }),
    relativeShows: builder.query({
      query: ({ appType, id, relativeType, language }) =>
        `${appType}/${id}/${relativeType}?api_key=${API_KEY}&language=${language}&page=1`,
    }),
  }),
});
export const {
  useContentForSliderQuery,
  useContentForBillboardQuery,
  useDetailsQuery,
  useReviewsQuery,
  useRelativeShowsQuery,
} = fetchData;
