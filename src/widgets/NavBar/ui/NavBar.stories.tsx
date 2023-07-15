import { NavBar } from './NavBar'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'widgets/NavBar',
    component: NavBar,
    tags: ['autodocs']
} satisfies Meta<typeof NavBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

