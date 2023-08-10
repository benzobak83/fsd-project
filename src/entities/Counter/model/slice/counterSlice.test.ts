import { CounterSchema } from '../types/counter'
import { counterActions, counterReducer } from './counterSlice'

describe('counterSlice', () => {
    test('should return icremented value', () => {
        const state: CounterSchema = { value: 10 }
        expect(counterReducer(state, counterActions.increment)).toEqual({
            value: 11,
        })
    })
})
describe('counterSlice', () => {
    test('should return decremented value', () => {
        const state: CounterSchema = { value: 10 }
        expect(counterReducer(state, counterActions.decrement)).toEqual({
            value: 9,
        })
    })
})
