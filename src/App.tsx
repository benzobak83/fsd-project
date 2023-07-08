import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'
import { cn } from './helpers/classNames/classNames'

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={cn('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to={'/'}>main</Link>
      <Link to={'/about'}>about</Link>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}
