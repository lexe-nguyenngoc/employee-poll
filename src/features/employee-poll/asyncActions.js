import { createAsyncThunk } from "@reduxjs/toolkit";
import { _getQuestions, _getUsers } from "../../api";

export const getQuestionsThunk = createAsyncThunk(
  "employeePoll/getQuestions",
  async (_) => {
    const questions = await _getQuestions();
    return questions;
  }
);

export const getUsersThunk = createAsyncThunk(
  "employeePoll/getUsers",
  async (_) => {
    const users = await _getUsers();
    return users;
  }
);
