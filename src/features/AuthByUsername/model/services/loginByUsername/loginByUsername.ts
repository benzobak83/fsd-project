import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage'
import { User, userActions } from 'entities/User'
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
>('login/loginByUsername', (authData, thunkAPI) => {
    return axios
        .post<User>('http://localhost:8000/login', authData)
        .then((res) => {
            const user = res.data

            thunkAPI.dispatch(userActions.setAuthData(user))
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user))

            return user
        })
        .catch((e) => {
            return thunkAPI.rejectWithValue(e.response.data.error)
        })
})
