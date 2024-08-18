import { createAsyncThunk } from "@reduxjs/toolkit";
import { _getUsers } from "../../api";

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    const users = await _getUsers();
    const foundUser = users[user.user];
    if (foundUser?.password === user.password) return foundUser;
    return thunkAPI.rejectWithValue("This user is incorrect!");
  }
);
