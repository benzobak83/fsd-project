import { StateSchema } from './types'
import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer
        },
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}

export const appStore = createReduxStore()
