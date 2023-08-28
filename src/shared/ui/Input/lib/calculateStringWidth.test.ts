import { calculateStringWidth } from './calculateStringWidth'

describe('calculateStringWidth', () => {
    test('return number', () => {
        expect(calculateStringWidth('')).toBe(0)
    })
})
