import { createSlice } from "@reduxjs/toolkit";
import { loginAsync } from "./asyncActions";
import { saveQuestionAnswer } from "../employee-poll/asyncActions";

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
    },
    changeAnswer: (state, action) => {
      const { qid, answer } = action.payload;
      state.currentUser.answers[qid] = answer;
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
      })
      .addCase(saveQuestionAnswer.fulfilled, (state, action) => {
        const { qid, answer } = action.payload.questionAnswer;
        state.currentUser.answers[qid] = answer;
      });
  }
});

export const { resetErrorMessage, logout, changeAnswer } = authSlice.actions;
export const selectState = (state) => state[ROOT_STATE_NAME];
export const selectCurrentUser = (state) => state[ROOT_STATE_NAME].currentUser;
export default authSlice.reducer;
