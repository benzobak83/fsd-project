import { Counter } from 'entities/Counter'
import { componentRender } from 'shared/lib/tests/renderWithRouter/renderWithRouter'
import { fireEvent, screen } from '@testing-library/react'

describe('Counter entitie', () => {
    test('test render', () => {
        const initialState = { counter: { value: 10 } }
        componentRender(<Counter />, { initialState })

        expect(screen.getByTestId('value')).toHaveTextContent('10')
    })

    test('test increment', () => {
        const initialState = { counter: { value: 10 } }
        componentRender(<Counter />, { initialState })

        const incrementBtn = screen.getByTestId('increment-btn')
        fireEvent.click(incrementBtn)
        expect(screen.getByTestId('value')).toHaveTextContent('11')
    })

    test('test decrement', () => {
        const initialState = { counter: { value: 10 } }
        componentRender(<Counter />, { initialState })

        const incrementBtn = screen.getByTestId('decrement-btn')
        fireEvent.click(incrementBtn)
        expect(screen.getByTestId('value')).toHaveTextContent('9')
    })

    test('test with empty store', () => {
        componentRender(<Counter />)

        const incrementBtn = screen.getByTestId('increment-btn')
        fireEvent.click(incrementBtn)
        expect(screen.getByTestId('value')).toHaveTextContent('1')
    })
})
