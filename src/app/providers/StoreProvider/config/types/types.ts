import { CounterSchema } from 'entities/Counter'
import { UserSchema } from 'entities/User'
import { appStore } from '../store'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
}

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
