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
        updateDiscount: build.mutation({
            query: ({ id, ...patch }) => ({
                url: `discounts/${id}`,
                method: 'PATCH',
                body: patch,
            }),
            // Оптимістичне оновлення кешу
            async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
                // Оновлюємо кеш для ендпоінту getDiscounts
                const patchResult = dispatch(
                    discountApi.util.updateQueryData('getDiscounts', undefined, (draft) => {
                        // Знаходимо дисконт у кеші та оновлюємо його поля
                        const discount = draft.find((d) => d.id === id);
                        if (discount) {
                            Object.assign(discount, patch);
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
        deleteDiscount: build.mutation({
            query: (id) => ({
                url: `discounts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Discounts', id: 'LIST' }]
        })
    })
});
export const { useGetDiscountsQuery , useAddDiscountMutation , useUpdateDiscountMutation , useDeleteDiscountMutation } = discountApi;