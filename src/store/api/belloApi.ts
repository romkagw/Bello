import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const belloApi = createApi({
  reducerPath: 'belloApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://afternoon-sierra-63099.herokuapp.com',
  }),
  endpoints: builder => ({
    getPriceList: builder.query({
      query: () => '/price-list',
    }),
  }),
});

export const { useGetPriceListQuery } = belloApi;
