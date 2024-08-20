import { createSlice } from "@reduxjs/toolkit";
import { getQuestionsThunk, getUsersThunk } from "./asyncActions";

export const ROOT_STATE_NAME = "employee-poll";

const employeePollSlice = createSlice({
  name: ROOT_STATE_NAME,
  initialState: {
    questions: null,
    users: null,
    loading: 0
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestionsThunk.pending, (state) => {
        state.loading = state.loading + 1;
      })
      .addCase(getQuestionsThunk.fulfilled, (state, action) => {
        state.loading = state.loading - 1;
        state.questions = action.payload;
      })
      .addCase(getUsersThunk.pending, (state) => {
        state.loading = state.loading + 1;
      })
      .addCase(getUsersThunk.fulfilled, (state, action) => {
        state.loading = state.loading - 1;
        state.users = action.payload;
      });
  }
});

export const selectState = (state) => state[ROOT_STATE_NAME];
export const selectQuestions = (state) => state[ROOT_STATE_NAME].questions;
export const selectQuestionLoading = (state) =>
  state[ROOT_STATE_NAME].loading > 0;
export const selectQuestion = (id) => (state) =>
  state[ROOT_STATE_NAME].questions?.[id] || null;
export const selectQuestionLoadingCompleted = (state) =>
  !!state[ROOT_STATE_NAME].questions;
export const selectUsers = (state) => state[ROOT_STATE_NAME].users;

export const {} = employeePollSlice.actions;
export default employeePollSlice.reducer;
