import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootObject } from "../../types/shazamTypes";

const shazamAPI = createApi({
  reducerPath: "sazamCoreAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (header) => {
      header.set(
        "X-RapidAPI-Key",
        "bcf70a70ebmshbedc5505e7be537p19c26djsnd2ab9bbaf497"
      );
      return header;
    },
  }),
  endpoints: (builder) => ({
    getTopcharts: builder.query<RootObject[], void>({
      query: () => {
        return {
          url: "/charts/world",
        };
      },
    }),
  }),
});

export const { useGetTopchartsQuery } = shazamAPI;

export default shazamAPI;
