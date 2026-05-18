import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
    reducerPath: 'cartApi',
    tagTypes: ['Carts'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (build) => ({
        getCart: build.query({
            query: () => 'cart',
            providesTags: (result) => result
                ? [
                    ...result.map(({ id }) => ({ type: 'Carts', id })),
                    { type: 'Carts', id: 'LIST' },
                ]
                : [{ type: 'Carts', id: 'LIST' }],
        }),
        addCart: build.mutation({
            query: (body) => ({
                url: 'cart',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Carts', id: 'LIST' }]
        }),
        deleteCart: build.mutation({
            query: (id) => ({
                url: `cart/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Carts', id: 'LIST' }]
        })
    })
});

export const { useGetCartQuery , useAddCartMutation, useDeleteCartMutation } = cartApi;