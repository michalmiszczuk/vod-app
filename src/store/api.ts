import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { MovieList } from "../types/moviesList";
import { movieToPlay } from "../types/movieToPlay";
import { userAuthenticationData } from "../types/userData";

export const vodApi = createApi({
  reducerPath: "vodApi",
  baseQuery: fetchBaseQuery({baseUrl: "https://thebetter.bsgroup.eu"}),
  endpoints: builder => ({
    getAllMovies: builder.mutation<MovieList, {id: number, token: string}>({
      query: ({id, token}) => ({
        url: "/Media/GetMediaList",
        method: "POST",
        body: {
          MediaListId: id,
          IncludeCategories: false,
          IncludeImages: true,
          IncludeMedia: false,
          PageNumber: 1,
          PageSize: 15,
        },
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),
    authenticateUser: builder.mutation<userAuthenticationData, string>({
      query: () => ({
        url: "/Authorization/SignIn",
        method: "POST",
        body: {
          device: {
            PlatformCode: "WEB",
            Name: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          },
        },
      }),
    }),
    logInUser: builder.mutation<userAuthenticationData, {username: string, password: string}>({
      query: ({username, password}) => ({
        url: "/Authorization/SignIn",
        method: "POST",
        body: {
          Username: username,
          Password: password,
          Device: {
            PlatformCode: "WEB",
            Name: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          },
        },
      }),
    }),
    getPlayMedia: builder.mutation<movieToPlay, {id: number, token: string, streamType: string}>({
      query: ({id, token, streamType}) => ({
        url: "/Media/GetMediaPlayInfo",
        method: "POST",
        body: {
          MediaId: id,
          StreamType: streamType,
        },
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetAllMoviesMutation,
  useAuthenticateUserMutation,
  useGetPlayMediaMutation,
  useLogInUserMutation,
} = vodApi;
