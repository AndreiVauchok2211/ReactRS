import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AstronomicalObjectBaseResponse } from '../../types/Response.type';

const BASE_URL = `https://stapi.co/api/v2/rest/astronomicalObject/search`;

export const astronomObjectApi = createApi({
  reducerPath: 'astronomObject/api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    searchObj: build.query<AstronomicalObjectBaseResponse, string>({
      query: (search: string) => ({
        url: `?name=${search}`,
        method: 'POST',
      }),
      // transformResponse: (response: AstronomicalObjectBaseResponse) =>
      //   response.astronomicalObjects,
    }),
  }),
});

export const { useSearchObjQuery } = astronomObjectApi;
