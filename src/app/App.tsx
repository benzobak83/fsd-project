import './styles/index.scss'
import { AppRouter } from 'app/providers/router'
import { Button } from 'shared/ui/Button/Button'
import { ErrorBoundary } from './providers/ErrorBoundary'
import { FC, Suspense } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
import { NavBar } from 'widgets/NavBar'
import { PageLoader } from 'widgets/PageLoader'
import { Sidebar } from 'widgets/Sidebar'
import { cn } from 'shared/lib/classNames/classNames'
import { useModal } from 'shared/hooks/useModal'
import { useTheme } from './providers/ThemeProvider'

const initModals = {
    check: false
}

export const App: FC = () => {
    const { theme } = useTheme()

    const {registerModal, registerTrigger, modals} = useModal(initModals)
    
    return (
        <div className={cn('app', {}, [theme])}>
            <ErrorBoundary>
                <Suspense fallback={<PageLoader />}>
                    <Button {...registerTrigger('check')}>trigger</Button>
                    <Modal open={modals.check}  {...registerModal('check')}>
                        <div>check</div>
                    </Modal>
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
