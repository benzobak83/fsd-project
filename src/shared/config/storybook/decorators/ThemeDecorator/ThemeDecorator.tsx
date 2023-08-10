import { StoryFn } from '@storybook/react'
import { StorybookThemeProvider } from '../../providers/StorybookThemeProvider/StorybookThemeProvider'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import styles from './ThemeDecorator.module.scss'

export const ThemeDecorator = (Story: StoryFn) => {
    return (
        <ThemeProvider>
            <StorybookThemeProvider>
                <div className={styles.ThemeDecorator}>
                    <div className={styles.storyWrapper}>
                        <Story />
                    </div>
                </div>
            </StorybookThemeProvider>
        </ThemeProvider>
    )
}
