import { Sidebar } from './Sidebar'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared/Sidebar',
    component: Sidebar,
    tags: ['autodocs']
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

