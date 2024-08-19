import { createSlice } from "@reduxjs/toolkit";
import { getQuestionsThunk } from "./asyncActions";
import { selectCurrentUser } from "../auth/authSlice";
import { transformQuestionToType } from "../../utils";

export const ROOT_STATE_NAME = "employee-poll";

const employeePollSlice = createSlice({
  name: ROOT_STATE_NAME,
  initialState: {
    questions: null,
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestionsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuestionsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
      });
  }
});

export const selectState = (state) => state[ROOT_STATE_NAME];
export const selectTransformedQuestions = (state) => {
  const currentUserId = selectCurrentUser(state).id;
  const questions = state[ROOT_STATE_NAME].questions;

  const transformedQuestions = transformQuestionToType(
    questions,
    currentUserId
  );

  return transformedQuestions;
};
export const selectQuestionLoading = (state) => ({
  loading: state[ROOT_STATE_NAME].loading,
  isCompleted: !!state[ROOT_STATE_NAME].questions
});

export const {} = employeePollSlice.actions;
export default employeePollSlice.reducer;
