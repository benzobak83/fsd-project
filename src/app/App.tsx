import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { cn } from 'shared/lib/classNames/classNames'

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={cn('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to={'/'}>main</Link>
      <Link to={'/about'}>about</Link>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
