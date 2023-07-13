import './styles/index.scss'
import { AppRouter } from 'app/providers/router'
import { FC, Suspense } from 'react'
import { NavBar } from 'widgets/NavBar'
import { PageLoader } from 'widgets/PageLoader'
import { Sidebar } from 'widgets/Sidebar'
import { cn } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'

export const App: FC = () => {
    const { theme } = useTheme()

    return (
        <div className={cn('app', {}, [theme])}>
            <Suspense fallback={<PageLoader/>}>
                <NavBar />
                <section className="content-page">
                    <Sidebar />
                    <AppRouter />
                </section>
            </Suspense>
        </div>
    )
}
