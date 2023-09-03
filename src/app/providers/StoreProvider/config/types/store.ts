import { CounterSchema } from 'entities/Counter'
import { LoginSchema } from 'features/AuthByUsername'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { UserSchema } from 'entities/User'
import { appStore } from '../store'
import { createReducerManager } from './../reducerManager'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    //async reducers
    login?: LoginSchema
}

export interface ReduxStoreWithReducerManager
    extends ToolkitStore<StateSchema> {
    reducerManager: ReturnType<typeof createReducerManager>
}

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
