import { FC } from 'react'
import './styles/index.scss'
import { cn } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { NavBar } from 'widgets/NavBar'
import { useTheme } from './providers/ThemeProvider'

export const App: FC = () => {
  const { theme } = useTheme()

  return (
    <div className={cn('app', {}, [theme])}>
      <NavBar />
      <AppRouter />
    </div>
  )
}
