import {createAsyncThunk} from '@reduxjs/toolkit';
import { callPostAPI } from '../../utils/axios';
import {Login, LoginError} from './type';

export const handleLogin = createAsyncThunk<Login, object, {rejectedValue: LoginError}>('login/post', async (params: object, {rejectWithValue, dispatch}) => {
    try {
        const response = await callPostAPI({
            route: 'api/login',
            body: params,
            isAuthenticated: false
        });
        const data: Login = response.data;
        return data;
    } catch (err: any) {
        const error: LoginError = err.response.data;
        return rejectWithValue(error);
    }
})