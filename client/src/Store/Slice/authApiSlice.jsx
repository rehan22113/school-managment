// import { apiSlice } from "../../app/api/apiSlice";
// import { logOut, setCredentials } from "./authSlice";

// export const authApiSlice = apiSlice.injectEndpoints({
//     endpoints: (builder) => ({
//         signup: builder.mutation({
//             query: (credentials) => ({
//                 url: "/register",
//                 method: "POST",
//                 body: { ...credentials },
//             }),
//         }),
//         login: builder.mutation({
//             query: (credentials) => ({
//                 url: "/auth",
//                 method: "POST",
//                 body: { ...credentials },
//             }),
//         }),
//         sendLogout: builder.mutation({
//             query: () => ({
//                 url: "/logout",
//                 method: "GET",
//             }),
//             async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//                 try {
//                     const { data } = await queryFulfilled;
//                     dispatch(logOut());
//                     setTimeout(() => {
//                         dispatch(apiSlice.util.resetApiState());
//                     }, 1000);
//                 } catch (err) {
//                     console.log(err);
//                 }
//             },
//         }),
//         refresh: builder.mutation({
//             query: () => ({
//                 url: "/refresh",
//                 method: "GET",
//             }),
//             async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//                 try {
//                     const { data } = await queryFulfilled;
//                     console.log(data);
//                     const { accessToken } = data;
//                     dispatch(setCredentials({ accessToken }));
//                 } catch (err) {
//                     console.log(err);
//                 }
//             },
//         }),
//     }),
// });

// export const { useSignupMutation, useLoginMutation, useSendLogoutMutation, useRefreshMutation } = authApiSlice;
