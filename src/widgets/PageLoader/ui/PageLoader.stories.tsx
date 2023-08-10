import { PageLoader } from './PageLoader'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'widgets/PageLoader',
    component: PageLoader,
    tags: ['autodocs'],
} satisfies Meta<typeof PageLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
    args: {
        label: 'loading...',
    },
}
