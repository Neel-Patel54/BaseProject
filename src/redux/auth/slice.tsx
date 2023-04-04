import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@redux/store';
import {AuthState} from './type';
import { handleLogin } from './index';

const initialState: AuthState = {
    isLoggedIn: false
    loadingStatus: 'idle',
    error: null,
    token: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleLogout: state => {
        state = initialState;
        return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(handleLogin.pending, state => {
        state.error = null;
        state.loadingStatus = 'loading';
    })

    builder.addCase(handleLogin.fulfilled, (state, {payload}) => {
      state.token = payload.token;
      state.error = null;
      state.loadingStatus = 'idle';
      state.isLoggedIn = true;
    })

    builder.addCase(handleLogin.rejected, (state, {payload}) => {
        state.error = payload.error;
        state.loadingStatus = 'idle';
    })
  },
})
 
export const {handleLogout} = authSlice.actions;

//selector
export const fetchLoadingStatus = (state: RootState) => state.auth.loadingStatus;

export default authSlice.reducer;