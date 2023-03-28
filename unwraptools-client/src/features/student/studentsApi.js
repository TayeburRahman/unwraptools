import { apiSlice } from "../apiSlice";

export const studentsApi = apiSlice.injectEndpoints({

    endpoints: (builder) => ({
                loginUser: builder.mutation({
                    query: (data) => ({
                        url: '/api/v1/admin/login',
                        method: 'POST',
                        body: data, 
                    }),
                }),

                registration: builder.mutation({
                     query: (data) => ({
                         url: '/api/v1/admin/signup',
                         method: 'POST',
                         body: data, 
                     }),
                 }),
         })

});