import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    tagTypes: ['Categories'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (build) => ({
        getCategories: build.query({
            query: () => 'categories',
            providesTags: (result) => result
                ? [
                    ...result.map(({ id }) => ({ type: 'Categories', id })),
                    { type: 'Categories', id: 'LIST' },
                ]
                : [{ type: 'Categories', id: 'LIST' }],
        }),
        addCategory: build.mutation({
            query: (body) => ({
                url: 'categories',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Categories', id: 'LIST' }]
        }),
        deleteCategory: build.mutation({
            query: (id) => ({
                url: `categories/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Categories', id: 'LIST' }]
        })
    })
});
export const { useGetCategoriesQuery , useAddCategoryMutation , useDeleteCategoryMutation } = categoryApi;