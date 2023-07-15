import { Button } from 'shared/ui/Button/Button'
import {FC, ReactNode} from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import {cn} from 'shared/lib/classNames/classNames'
import styles from './StorybookThemeProvider.module.scss'

interface StorybookThemeProviderProps {
    children: ReactNode
}

const THEMES = Object.values(Theme)

export const StorybookThemeProvider: FC<StorybookThemeProviderProps> = ({ children }) => {
    const { theme, setTheme } = useTheme()

    return (
        <div className={cn('app', {}, [theme, styles.StorybookThemeProvider])}>
            <div className={styles.themesList}>
                {THEMES.map((themeName) => {
                    return (
                        <Button
                            key={themeName}
                            className={cn('', {
                                [styles.active]: theme === themeName
                            })}
                            onClick={() => setTheme(themeName)}
                        >
                            {themeName}
                        </Button>
                    )
                })}
            </div>
            {children}
        </div>
    )
}
