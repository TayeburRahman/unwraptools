import { apiSlice } from "../apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/api/v1/admin/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted (query, { queryFulfilled, dispatch }) {
        try {
          const result  = await queryFulfilled;


          localStorage.setItem("auth", JSON.stringify({
            token: result.data.token,
            user: result.data.user
          }))

          dispatch(userLoggedIn({
            token: result.data.token,
            user: result.data.user
          }));

        //   dispatch(
        //     addMessage({
        //       message: "Registration successful",
        //       type: "success",
        //     })
        //   );
        
        } catch (error) { 
            console.log("redux store error",error);
        }
      },
    }),

    registration: builder.mutation({
      query: (data) => ({
        url: "/api/v1/admin/signup",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginUserMutation, useRegistrationMutation } = authApi;   