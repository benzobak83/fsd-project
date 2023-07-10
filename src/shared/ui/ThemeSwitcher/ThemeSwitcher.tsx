import { Button, ThemeButton } from '../Button/Button'
import { FC } from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { cn } from 'shared/lib/classNames/classNames'
import DarkIcon from 'shared/assets/icons/dark-theme.svg'
import LightIcon from 'shared/assets/icons/light-theme.svg'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme()
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={cn('', {}, [className])}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    )
}
