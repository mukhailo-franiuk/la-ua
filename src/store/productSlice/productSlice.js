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
            invalidatesTags: [{ type: 'Products', id: 'LIST' }]
        }),
        updateProduct: build.mutation({
            query: ({ id, ...patch }) => ({
                url: `products/${id}`,
                method: 'PATCH',
                body: patch,
            }),
            // Оптимістичне оновлення кешу
            async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
                // Оновлюємо кеш для ендпоінту getProducts
                const patchResult = dispatch(
                    productApi.util.updateQueryData('getProducts', undefined, (draft) => {
                        // Знаходимо продукт у кеші та оновлюємо його поля
                        const product = draft.find((p) => p.id === id);
                        if (product) {
                            Object.assign(product, patch);
                        }
                    })
                );
                try {
                    // Чекаємо завершення запиту на сервері
                    await queryFulfilled;
                } catch {
                    // Якщо сервер повернув помилку, скасовуємо зміни у кеші
                    patchResult.undo();
                }
            },
        }),
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Products', id: 'LIST' }]
        })
    })
});

export const { useGetProductsQuery, useAddProductsMutation, useUpdateProductMutation , useDeleteProductMutation } = productApi;