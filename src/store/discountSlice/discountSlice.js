import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const discountApi = createApi({
    reducerPath: 'discountApi',
    tagTypes: ['Discounts'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (build) => ({
        getDiscounts: build.query({
            query: () => 'discounts',
            providesTags: (result) => result
                ? [
                    ...result.map(({ id }) => ({ type: 'Discounts', id })),
                    { type: 'Discounts', id: 'LIST' },
                ]
                : [{ type: 'Discounts', id: 'LIST' }],
        }),
        addDiscount: build.mutation({
            query: (body) => ({
                url: 'discounts',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Discounts', id: 'LIST' }]
        }),
        deleteDiscount: build.mutation({
            query: (id) => ({
                url: `discounts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Discounts', id: 'LIST' }]
        })
    })
});
export const { useGetDiscountsQuery , useAddDiscountMutation , useDeleteDiscountMutation } = discountApi;