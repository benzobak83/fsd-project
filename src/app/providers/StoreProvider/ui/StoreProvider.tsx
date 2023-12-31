import { DeepPartial } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { ReactNode } from 'react'
import { StateSchema } from '../config/types/store'
import { createReduxStore } from '../config/store'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props

    const store = createReduxStore(initialState as StateSchema)

    return <Provider store={store}>{children}</Provider>
}
