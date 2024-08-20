import { createSlice } from "@reduxjs/toolkit";
import { loginAsync } from "./asyncActions";

export const ROOT_STATE_NAME = "auth";

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
    },
    logout: (state) => {
      state.currentUser = null;
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

export const { resetErrorMessage, logout } = authSlice.actions;
export const selectState = (state) => state[ROOT_STATE_NAME];
export const selectCurrentUser = (state) => state[ROOT_STATE_NAME].currentUser;
export default authSlice.reducer;
