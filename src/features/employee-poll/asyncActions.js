import { createAsyncThunk } from "@reduxjs/toolkit";
import { _getQuestions, _getUsers, _saveQuestionAnswer } from "../../api";

export const getQuestionsThunk = createAsyncThunk(
  "employeePoll/getQuestions",
  async (_) => {
    const questions = await _getQuestions();

    return questions;
  }
);

export const getQuestionThunk = createAsyncThunk(
  "employeePoll/getQuestionDetail",
  async ({ id, failFn }) => {
    const questions = await _getQuestions();
    if (questions[id]) return questions[id];

    failFn();
  }
);

export const getUsersThunk = createAsyncThunk(
  "employeePoll/getUsers",
  async (_) => {
    const users = await _getUsers();
    return users;
  }
);

export const saveQuestionAnswer = createAsyncThunk(
  "employeePoll/saveQuestionAnswer",
  async (questionAnswer) => {
    const updatedQuestion = await _saveQuestionAnswer(questionAnswer);
    return { updatedQuestion, questionAnswer };
  }
);
