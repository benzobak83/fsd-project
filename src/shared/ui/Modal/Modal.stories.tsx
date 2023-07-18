import { Modal } from './Modal'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs']
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, cum illo repudiandae asperiores dignissimos eum esse quam suscipit ea. Neque, labore? Quae amet libero dolorum fugiat officia? Expedita, unde sed.',
        open: true
    }
}
