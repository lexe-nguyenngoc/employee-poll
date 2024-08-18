import { createSlice } from "@reduxjs/toolkit";
import { loginAsync } from "./asyncAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    errorMessage: null,
    currentUser: null
  },
  reducers: {
    resetErrorMessage: (state) => {
      state.errorMessage = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.errorMessage = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
        state.errorMessage = null;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      });
  }
});

export const { resetErrorMessage } = authSlice.actions;
export const selectState = (state) => state.auth;
export const selectCurrentUser = (state) => state.auth.currentUser;
export default authSlice.reducer;
