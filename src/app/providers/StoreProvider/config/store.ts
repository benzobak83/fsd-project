import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './types/store'
import { counterReducer } from 'entities/Counter'
import { loginReducer } from 'features/AuthByUsername'
import { userReducer } from 'entities/User'

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        login: loginReducer,
    }

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
}

export const appStore = createReduxStore()
