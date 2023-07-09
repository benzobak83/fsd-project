import { FC } from 'react'
import { Link } from 'react-router-dom'
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { cn } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { NavBar } from 'widgets/NavBar'

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={cn('app', {}, [theme])}>
      <NavBar />
      <AppRouter />
      <button onClick={toggleTheme}>TOGGLE THEME</button>
    </div>
  )
}
