import { Button, ButtonVariant } from '../Button/Button'
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
            variant={ButtonVariant.TEXT}
            onClick={toggleTheme}
            className={cn('', {}, [className])}
            invertedColor={true}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    )
}
