import { LoginSchema } from '../types/loginSchema'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'

const initialState: LoginSchema = {
    isLoading: false,
    username: '',
    password: '',
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined
                state.isLoading = true
                console.log('311')
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                console.log('211')
                console.log(loginByUsername)
                state.isLoading = false
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                console.log(action.payload + '111')
                state.error = action.payload
                state.isLoading = false
            })
    },
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
