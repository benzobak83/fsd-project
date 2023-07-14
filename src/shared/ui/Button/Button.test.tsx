import { Button, ThemeButton } from './Button'
import {render, screen} from '@testing-library/react'

describe('Button component', () => {
    test('render text', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })
    test('render theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
    })
})
