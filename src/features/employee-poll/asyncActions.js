import { createAsyncThunk } from "@reduxjs/toolkit";
import { _getQuestions, _saveQuestionAnswer } from "../../api";

export const getQuestionsThunk = createAsyncThunk(
  "employeePoll/getQuestions",
  async (_) => {
    const questions = await _getQuestions();
    return questions;
  }
);

export const saveQuestionAnswer = createAsyncThunk(
  "employeePoll/saveQuestionAnswer",
  async ({ answer, callback }) => {
    await _saveQuestionAnswer(answer);
    callback();
  }
);
