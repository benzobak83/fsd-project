import { Button } from "shared/ui/Button/Button";
import { MouseEvent } from "react";
import { StoryFn } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import styles from './ThemeDecarator.module.scss'

const THEMES = Object.values(Theme)

export const ThemeDecarator = (Story: StoryFn) => {

    const switchTheme = (
        e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
        theme: Theme
    ) => {
        const target = e.target as HTMLButtonElement

        target.closest('.app').className = `app ${theme}`
    }
    
    return (
        <div
            className={`app light`}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px', minHeight: '0px' }}
        >
            <div className={styles.themesList}>
                {THEMES.map((theme) => {
                    return (
                        <Button key={theme} onClick={(e) => switchTheme(e, theme)}>
                            {theme}
                        </Button>
                    )
                })}
            </div>
            <div className={styles.storyWrapper}>
                <Story />
            </div>
        </div>
    )
}

