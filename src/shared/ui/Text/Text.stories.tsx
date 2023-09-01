import { Text, TextColor, TextVariant } from './Text'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
    args: {
        children: 'Description text',
    },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

//TextColor
export const Primary: Story = {
    args: {
        color: TextColor.PRIMARY,
    },
}
export const Secondary: Story = {
    args: {
        color: TextColor.SECONDARY,
    },
}
export const Error: Story = {
    args: {
        color: TextColor.ERROR,
    },
}

//TextSize
export const SizeM: Story = {
    args: {
        variant: TextVariant.M,
    },
}
export const SizeL: Story = {
    args: {
        variant: TextVariant.L,
    },
}
export const SizeXL: Story = {
    args: {
        variant: TextVariant.XL,
    },
}
