import 'app/styles/index.scss'
import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider'
import { StoryFn } from '@storybook/react'

export const StoreDecorator =
    (store: DeepPartial<StateSchema>) => (Story: StoryFn) => {
        return (
            <StoreProvider initialState={store}>
                <Story />
            </StoreProvider>
        )
    }
