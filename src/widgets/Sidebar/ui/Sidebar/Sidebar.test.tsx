import { Sidebar } from 'widgets/Sidebar'
import { componentRender } from 'shared/lib/tests/renderWithRouter/renderWithRouter'
import { fireEvent, screen } from '@testing-library/react'

describe('Sidebar widget', () => {
    test('test render', () => {
        componentRender(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('test toggle', () => {
        componentRender(<Sidebar />)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
