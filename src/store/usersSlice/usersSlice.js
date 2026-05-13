import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    reducerPath: 'usersApi',
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => 'users',
            providesTags: (result) => result
                ? [
                    ...result.map(({ id }) => ({ type: 'Users', id })),
                    { type: 'Users', id: 'LIST' },
                ]
                : [{ type: 'Users', id: 'LIST' }],
        }),
        addUsers: build.mutation({
            query: (body) => ({
                url: 'users',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Users', id: 'LIST' }]
        }),
        updateUsers: build.mutation({
            query: (body) => ({
                url: 'users',
                method: 'UPDATE',
                body,
            }),
            invalidatesTags: [{ type: 'Users', id: 'LIST' }]
        })
    })
});
export const { useGetUsersQuery, useAddUsersMutation, useUpdateUsersMutation } = usersApi;