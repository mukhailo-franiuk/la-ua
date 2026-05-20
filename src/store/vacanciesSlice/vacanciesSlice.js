import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const vacanciesApi = createApi({
    reducerPath: 'vacanciesApi',
    tagTypes: ['Vacancies'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (build) => ({
        getVacancies: build.query({
            query: () => 'vacancies',
            providesTags: (result) => result
                ? [
                    ...result.map(({ id }) => ({ type: 'Vacancies', id })),
                    { type: 'Vacancies', id: 'LIST' },
                ]
                : [{ type: 'Vacancies', id: 'LIST' }],
        }),
        addVacancy: build.mutation({
            query: (body) => ({
                url: 'vacancies',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Vacancies', id: 'LIST' }]
        }),
        updateVacancy: build.mutation({
            query: ({ id, ...patch }) => ({
                url: `vacancies/${id}`,
                method: 'PATCH',
                body: patch,
            }),
            // Оптимістичне оновлення кешу
            async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
                // Оновлюємо кеш для ендпоінту getVacancies
                const patchResult = dispatch(
                    vacanciesApi.util.updateQueryData('getVacancies', undefined, (draft) => {
                        // Знаходимо вакансію у кеші та оновлюємо її поля
                        const vacancy = draft.find((v) => v.id === id);
                        if (vacancy) {
                            Object.assign(vacancy, patch);
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
        deleteVacancy: build.mutation({
            query: (id) => ({
                url: `vacancies/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Vacancies', id: 'LIST' }]
        })
    })
});

export const { useGetVacanciesQuery, useAddVacancyMutation, useUpdateVacancyMutation , useDeleteVacancyMutation } = vacanciesApi;