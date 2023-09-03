import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './types/store'
import { counterReducer } from 'entities/Counter'
import { createReducerManager } from './reducerManager'
import { userReducer } from 'entities/User'

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })

    //@ts-ignore TODO: add custom type for store
    store.reducerManager = reducerManager

    return store
}

export const appStore = createReduxStore()
