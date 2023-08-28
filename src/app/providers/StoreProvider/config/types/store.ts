import { CounterSchema } from 'entities/Counter'
import { LoginSchema } from 'features/AuthByUsername'
import { UserSchema } from 'entities/User'
import { appStore } from '../store'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    login: LoginSchema
}

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
