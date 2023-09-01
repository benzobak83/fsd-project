import { User } from 'entities/User'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string }
>('login/loginByUsername', (authData, { rejectWithValue }) => {
    return axios
        .post<User>('http://localhost:8000/login', authData)
        .then((res) => res.data)
        .catch((e) => {
            return rejectWithValue(e.response.data.error)
        })
})
