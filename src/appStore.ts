import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { pokemonApi } from './api/pokemonApi'

export const appStore = configureStore({
    reducer: {
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
})

export type AppState = ReturnType<typeof appStore.getState>

export const useAppSelector = <T>(fn: (state: AppState) => T) => useSelector<AppState, T>(fn)
