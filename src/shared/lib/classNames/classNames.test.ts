import { cn } from "./classNames"

describe('classNames', () => {
    test('classNames with class', () => {
        expect(cn('className')).toBe('className')
    })
    test('classNames with additional class', () => {
        expect(cn('className', {}, ['secondClassName'])).toBe(
            'className secondClassName'
        )
    })
    test('classNames with true mod', () => {
        expect(cn('className', {'modTrue': true}, ['secondClassName'])).toBe(
            'className secondClassName modTrue'
        )
    })
    test('classNames with false mod', () => {
        expect(cn('className', {'modFalse' : false}, ['secondClassName'])).toBe(
            'className secondClassName'
        )
    })
    test('classNames with undefined mod', () => {
        expect(cn('className', {'modFalse' : undefined}, ['secondClassName'])).toBe(
            'className secondClassName'
        )
    })
    test('classNames with true and false mod', () => {
        expect(cn('className', {'modFalse' : false, 'modTrue': true}, ['secondClassName'])).toBe(
            'className secondClassName modTrue'
        )
    })
})
