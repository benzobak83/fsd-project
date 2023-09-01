import { Button, ButtonSize, ButtonVariant } from './Button'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
    args: {
        children: 'Text Button',
        variant: ButtonVariant.TEXT,
    },
}

export const Outline: Story = {
    args: {
        children: 'Outline Button',
        variant: ButtonVariant.OUTLINE,
    },
}

export const Contained: Story = {
    args: {
        children: 'Contained Button',
        variant: ButtonVariant.CONTAINED,
    },
}

export const ContainedAndInverted: Story = {
    args: {
        children: 'Contained Button with invertedColor',
        variant: ButtonVariant.CONTAINED,
        invertedColor: true,
    },
}

export const Disabled: Story = {
    args: {
        children: 'Disabled Button',
        variant: ButtonVariant.CONTAINED,
        disabled: true,
    },
}

export const ButtonM: Story = {
    args: {
        children: 'Button M size',
        variant: ButtonVariant.CONTAINED,
        size: ButtonSize.M,
    },
}
export const ButtonL: Story = {
    args: {
        children: 'Button L size',
        variant: ButtonVariant.CONTAINED,
        size: ButtonSize.L,
    },
}
export const ButtonXL: Story = {
    args: {
        children: 'Button XL size',
        variant: ButtonVariant.CONTAINED,
        size: ButtonSize.XL,
    },
}
