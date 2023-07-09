import { FC } from 'react'
import { cn } from 'shared/lib/classNames/classNames'
import styles from './ThemeSwitcher.module.scss'
import LightIcon from 'shared/assets/icons/light-theme.svg'
import DarkIcon from 'shared/assets/icons/dark-theme.svg'
import { Theme, useTheme } from 'app/providers/ThemeProvider'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      className={cn(styles.ThemeSwitcher, {}, [className])}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </button>
  )
}
