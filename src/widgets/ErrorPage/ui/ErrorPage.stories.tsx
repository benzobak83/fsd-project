import { ErrorPage } from './ErrorPage'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared/ErrorPage',
    component: ErrorPage,
    tags: ['autodocs']
} satisfies Meta<typeof ErrorPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

