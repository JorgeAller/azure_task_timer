import { configureStore } from '@reduxjs/toolkit';
import { configurationSlice } from './slices/configurationSlice';

export const store = configureStore({
    reducer: {
        configuration: configurationSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;