import { LangSwitcher } from './LangSwitcher'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared/LangSwitcher',
    component: LangSwitcher,
    tags: ['autodocs']
} satisfies Meta<typeof LangSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

