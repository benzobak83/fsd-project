import { Button, ThemeButton } from './Button'
import type { Meta, StoryObj } from '@storybook/react'


const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>


export const Primary: Story = {
    args: {
        children: 'Primary Button'
    }
}

export const Clear: Story = {
    args: {
        children: 'Clear Button',
        theme: ThemeButton.CLEAR
    }
}

export const Outline: Story = {
    args: {
        children: 'Outline Button',
        theme: ThemeButton.OUTLINE
    }
}

