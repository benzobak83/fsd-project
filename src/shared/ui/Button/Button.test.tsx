import { Button, ButtonColor, ButtonSize, ButtonVariant } from './Button'
import {render, screen} from '@testing-library/react'

describe('Button component', () => {
    test('render text', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })
    test('render variant', () => {
        render(<Button variant={ButtonVariant.TEXT}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('text')
    })
    test('render color', () => {
        render(<Button color={ButtonColor.PRIMARY}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('primary')
    })
    test('render size', () => {
        render(<Button size={ButtonSize.XL}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('xl')
    })
})
