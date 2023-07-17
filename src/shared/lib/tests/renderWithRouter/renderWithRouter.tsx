import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import { ReactNode } from 'react'
import { i18nForTest } from 'shared/config/i18n/i18nForTest'
import { render } from '@testing-library/react'

export interface RenderWithRouterOptions {
    route?: string
}

export const componentRender = (
    component: ReactNode,
    options: RenderWithRouterOptions = {}
) => {
    const {route = '/'} = options
    return render(
        <MemoryRouter>
            <I18nextProvider i18n={i18nForTest}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    )
}
