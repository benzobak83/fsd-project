import { FC } from 'react'
import { Link } from 'react-router-dom'
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { cn } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={cn('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to={'/'}>main</Link>
      <Link to={'/about'}>about</Link>
      <AppRouter />
    </div>
  )
}
