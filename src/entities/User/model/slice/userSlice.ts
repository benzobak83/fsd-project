import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage'
import { User } from './../types/user'
import { UserSchema } from '../types/user'

const initialState: UserSchema = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
        },
        initAuthData: (state) => {
            const userFromLocalStorage = localStorage.getItem(
                USER_LOCALSTORAGE_KEY
            )

            if (userFromLocalStorage) {
                state.authData = JSON.parse(userFromLocalStorage)
            }
        },
        logout: (state) => {
            state.authData = undefined

            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
        },
    },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
