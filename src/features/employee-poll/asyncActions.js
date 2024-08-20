import { createAsyncThunk } from "@reduxjs/toolkit";
import { _getQuestions } from "../../api";

export const getQuestionsThunk = createAsyncThunk(
  "employeePoll/getQuestions",
  async (_) => {
    const questions = await _getQuestions();
    return questions;
  }
);
