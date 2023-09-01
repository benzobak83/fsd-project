import { LoginForm } from './LoginForm'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator/StoreDecorator'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'features/AuthByUsername/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
Default.decorators = [
    StoreDecorator({
        login: {
            username: 'admin',
            password: 'password',
        },
    }),
]

export const WithError: Story = {}
WithError.decorators = [
    StoreDecorator({
        login: {
            username: 'admin',
            password: 'password',
            error: 'error message',
        },
    }),
]

export const WithLoading: Story = {}
WithLoading.decorators = [
    StoreDecorator({
        login: {
            username: 'admin',
            password: 'password',
            isLoading: true,
        },
    }),
]
