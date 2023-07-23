import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: null,
    error: null
  },
  reducers:  {
    userLoginRequest: (state) => {
     state.loading = true
      state.error = null
    },
    userLoginSuccess: (state,action) => {
      state.loading = false
      state.user = action.payload
      state.error = null
    },
    userLoginFailure: (state,action) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    },
  }
});
export const { userLoginRequest,userLoginSuccess,userLoginFailure } = userSlice.actions
export default userSlice.reducer