import { CounterSchema } from 'entities/Counter'
import { appStore } from './store'

export interface StateSchema {
  counter: CounterSchema
}

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
