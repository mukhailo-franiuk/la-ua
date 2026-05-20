import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersApi } from './usersSlice/usersSlice';
import { productApi } from './productSlice/productSlice';
import { categoryApi } from './categorySlice/categorySlice';
import { discountApi } from './discountSlice/discountSlice';
import { cartApi } from './cartSlice/cartSlice';
import { vacanciesApi } from './vacanciesSlice/vacanciesSlice';



export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [discountApi.reducerPath]: discountApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
        [vacanciesApi.reducerPath]: vacanciesApi.reducer

    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(
        usersApi.middleware,
        productApi.middleware,
        categoryApi.middleware,
        discountApi.middleware,
        cartApi.middleware,
        vacanciesApi.middleware
    )
});
setupListeners(store.dispatch)