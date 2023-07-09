import { FC, Suspense } from 'react'
import './styles/index.scss'
import { cn } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { NavBar } from 'widgets/NavBar'
import { useTheme } from './providers/ThemeProvider'
import { Sidebar } from 'widgets/Sidebar'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

export const App: FC = () => {
  const { theme } = useTheme()

  return (
    <div className={cn('app', {}, [theme])}>
      <Suspense fallback="translating...">
        <NavBar />
        <section className="content-page">
          <Sidebar />
          <AppRouter />
        </section>
      </Suspense>
    </div>
  )
}
