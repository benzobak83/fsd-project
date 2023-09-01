import { AppRouter } from 'app/providers/router'
import { ErrorBoundary } from './providers/ErrorBoundary'
import { FC, Suspense, useEffect } from 'react'
import { NavBar } from 'widgets/NavBar'
import { PageLoader } from 'widgets/PageLoader'
import { Sidebar } from 'widgets/Sidebar'
import { cn } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useTypedSelectorAndDispatch'
import { useTheme } from './providers/ThemeProvider'
import { userActions } from 'entities/User'

export const App: FC = () => {
    const dispatch = useAppDispatch()

    const { theme } = useTheme()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={cn('app', {}, [theme])}>
            <ErrorBoundary>
                <Suspense fallback={<PageLoader />}>
                    <NavBar />
                    <section className="content-page">
                        <Sidebar />
                        <AppRouter />
                    </section>
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}
