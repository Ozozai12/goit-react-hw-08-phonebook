import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'authorization',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logoutUser.fulfilled](state, action) {
      state.user.name = initialState.user.name;
      state.user.email = initialState.user.email;
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
