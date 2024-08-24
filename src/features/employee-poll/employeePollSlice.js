import { createSlice } from "@reduxjs/toolkit";
import {
  getQuestionsThunk,
  getQuestionThunk,
  getUsersThunk,
  saveQuestionAnswer
} from "./asyncActions";

export const ROOT_STATE_NAME = "employee-poll";

const employeePollSlice = createSlice({
  name: ROOT_STATE_NAME,
  initialState: {
    questions: null,
    users: null,
    loading: 0,
    question: null
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
      .addCase(getQuestionThunk.pending, (state) => {
        state.loading = state.loading + 1;
      })
      .addCase(getQuestionThunk.fulfilled, (state, action) => {
        state.loading = state.loading - 1;
        state.question = action.payload;
      })
      .addCase(getUsersThunk.pending, (state) => {
        state.loading = state.loading + 1;
      })
      .addCase(getUsersThunk.fulfilled, (state, action) => {
        state.loading = state.loading - 1;
        state.users = action.payload;
      })
      .addCase(saveQuestionAnswer.pending, (state) => {
        state.loading = state.loading + 1;
      })
      .addCase(saveQuestionAnswer.fulfilled, (state, action) => {
        state.loading = state.loading - 1;
        state.question = action.payload.updatedQuestion;
      });
  }
});

export const selectState = (state) => state[ROOT_STATE_NAME];
export const selectQuestions = (state) => state[ROOT_STATE_NAME].questions;
export const selectQuestionLoading = (state) =>
  state[ROOT_STATE_NAME].loading > 0;
export const selectQuestion = (state) => state[ROOT_STATE_NAME].question;
export const selectQuestionLoadingCompleted = (state) =>
  !!state[ROOT_STATE_NAME].questions;
export const selectUsers = (state) => state[ROOT_STATE_NAME].users;

export const {} = employeePollSlice.actions;
export default employeePollSlice.reducer;
