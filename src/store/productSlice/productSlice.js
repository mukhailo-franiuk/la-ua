import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: 'productApi',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => 'products',
            providesTags: (result) => result
                ? [
                    ...result.map(({ id }) => ({ type: 'Products', id })),
                    { type: 'Products', id: 'LIST' },
                ]
                : [{ type: 'Products', id: 'LIST' }],
        }),
        addProducts: build.mutation({
            query: (body) => ({
                url: 'products',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'Products', id: 'LIST'}]
        }),
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{type: 'Products', id: 'LIST'}]
        })
    })
});

export const { useGetProductsQuery , useAddProductsMutation , useDeleteProductMutation } = productApi;