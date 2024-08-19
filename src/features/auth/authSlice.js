import { createSlice } from "@reduxjs/toolkit";
import { loginAsync } from "./asyncActions";

export const ROOT_STATE_NAME = "auth";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    errorMessage: null,
    currentUser: {
      id: "sarahedo",
      password: "password123",
      name: "Sarah Edo",
      avatarURL: null,
      answers: {
        "8xf0y6ziyjabvozdd253nd": "optionOne",
        "6ni6ok3ym7mf1p33lnez": "optionOne",
        am8ehyc8byjqgar0jgpub9: "optionTwo",
        loxhs1bqm25b708cmbf3g: "optionTwo"
      },
      questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"]
    }
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
export const selectState = (state) => state[ROOT_STATE_NAME];
export const selectCurrentUser = (state) => state[ROOT_STATE_NAME].currentUser;
export default authSlice.reducer;
