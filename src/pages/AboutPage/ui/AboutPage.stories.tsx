import AboutPage from './AboutPage'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    tags: ['autodocs'],
} satisfies Meta<typeof AboutPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
