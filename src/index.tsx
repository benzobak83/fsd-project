import 'app/styles/index.scss'
import 'shared/config/i18n/i18n'
import { App } from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider'
import { ThemeProvider } from './app/providers/ThemeProvider'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))

root.render(
    <StoreProvider>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StoreProvider>
)
